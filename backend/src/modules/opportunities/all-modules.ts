// ================================================================
// PC HUB 2.0 — All Feature Modules
// Clean imports — no circular dependencies
// ================================================================

import {
  Module, Injectable, Controller, Get, Post, Put, Patch, Delete,
  Body, Param, Query, UseGuards, HttpCode, HttpStatus,
  NotFoundException, BadRequestException,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsArray, IsUUID, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';


import { PrismaService } from '../../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { NotificationsService } from '../notifications/notifications.service';
import { AuditModule } from '../audit/audit.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RbacGuard } from '../../common/guards/rbac.guard';
import { Permissions } from '../../common/decorators/permissions.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

class ListQuery {
  @IsOptional() @IsString() q?: string;
  @IsOptional() @Type(() => Number) @IsNumber() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsNumber() @Min(1) @Max(100) pageSize?: number = 20;
  @IsOptional() @IsString() sortBy?: string = 'createdAt';
  @IsOptional() @IsString() sortDir?: string = 'desc';
}

const meta = (total: number, page: number, ps: number) =>
  ({ total, page, pageSize: ps, pages: Math.ceil(total / ps) });

const safeCol = (col: string, valid: string[], def = 'createdAt') =>
  valid.includes(col) ? col : def;

// Stage percentage mapping
const STAGE_PCT: Record<string,number> = {
  Lead:20, Probable:50, StrongProbable:75, Contracted:100, WorkStarted:100, Completed:100,
};

// PSC rates
const PSC_RATES: Record<string,number> = {
  'Design & Build - 1 stage':2.45,'Design & Build - 2 stage':2.65,
  'Traditional':2.80,'Framework Agreement':2.20,'Negotiated':2.00,
};


// ── OPPORTUNITIES ────────────────────────────────────────────────
@Injectable()
class OpportunitiesService {
  constructor(private readonly p: PrismaService, private readonly a: AuditService) {}
  async findAll(q: any) {
    const take = Math.min(+(q.pageSize||20),100), skip=((+(q.page||1))-1)*take;
    const ob: any = { [safeCol(q.sortBy||'createdAt',['createdAt','name','clientName','value','status','commNum','stagePercent'])]: q.sortDir||'desc' };
    const w: any = {
      ...(q.status&&{status:q.status as any}), ...(q.leadId&&{leadId:q.leadId}),
      ...(q.sector&&{sector:q.sector}), ...(q.region&&{region:q.region}),
      ...(q.q&&{OR:[{name:{contains:q.q,mode:'insensitive'}},{clientName:{contains:q.q,mode:'insensitive'}},{commNum:{contains:q.q,mode:'insensitive'}}]}),
    };
    const [data,total]=await Promise.all([
      this.p.opportunity.findMany({where:w,skip,take,orderBy:ob,include:{lead:{select:{id:true,name:true,initials:true,avatarColor:true}},_count:{select:{ceEvents:true,invoiceSchedules:true}}}}),
      this.p.opportunity.count({where:w}),
    ]);
    return {data,meta:meta(total,+(q.page||1),take)};
  }
  async findOne(id:string) {
    const o=await this.p.opportunity.findUnique({where:{id},include:{lead:true,srp:{select:{id:true,status:true,approvedAt:true,commercialLead:true,approvedBy:true}},feeCalculator:{select:{id:true,grandTotal:true,constructionValue:true,procRoute:true,totalPrimeCore:true,totalCore:true,totalTimeCharges:true,totalExtConsultancy:true,totalDisbursements:true,pscFee:true}},projectPi:true,_count:{select:{ceEvents:true,invoiceSchedules:true,surveys:true}}}});
    if(!o) throw new NotFoundException(`Opportunity ${id} not found`);
    return o;
  }
  async create(dto:any,user:any) {
    const latest=await this.p.opportunity.findFirst({orderBy:{commNum:'desc'},select:{commNum:true}});
    const n=latest?parseInt(latest.commNum.replace('PC-',''))+1:15300;
    const commNum=`PC-${n}`;
    // Explicitly map known Opportunity fields — never spread unknown DTO fields into Prisma
    const o=await this.p.opportunity.create({data:{
      name:dto.name,
      clientName:dto.clientName,
      leadId:dto.leadId||undefined,
      status:dto.status||'Lead',
      value:dto.value||0,
      services:dto.services||[],
      sector:dto.sector||undefined,
      region:dto.region||undefined,
      commNum,
      stagePercent:STAGE_PCT[dto.status||'Lead']??20,
      srp:{create:{ projectOverview:dto.notes||undefined }},
      feeCalculator:{create:{}},
      projectPi:{create:{}},
    },include:{lead:{select:{name:true}}}});
    await this.a.log({action:'Create' as any,entityType:'opportunities',entityId:o.id,opportunityId:o.id,userId:user?.id,description:`Commission ${commNum} created`,afterVal:{commNum,status:dto.status}});
    return o;
  }
  async update(id:string,dto:any,user:any) {
    const before=await this.findOne(id);
    const data:any={...dto};
    if(dto.status) data.stagePercent=STAGE_PCT[dto.status]??before.stagePercent;
    const o=await this.p.opportunity.update({where:{id},data});
    await this.a.log({action:'Update' as any,entityType:'opportunities',entityId:id,opportunityId:id,userId:user?.id,description:`Commission ${before.commNum} updated`,beforeVal:{status:before.status},afterVal:{status:o.status}});
    await this.a.versionSnapshot('opportunities',id,id,before,user?.name||'System','Updated');
    return o;
  }
  async remove(id:string,user:any) {
    const o=await this.findOne(id);
    await this.p.opportunity.delete({where:{id}});
    await this.a.log({action:'Delete' as any,entityType:'opportunities',entityId:id,userId:user?.id,description:`Commission ${o.commNum} deleted`});
  }
  async getVersions(id:string) { return this.p.entityVersion.findMany({where:{entityType:'opportunities',entityId:id},orderBy:{version:'desc'},take:20}); }
}
@ApiTags('Opportunities') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'opportunities',version:'1'})
class OpportunitiesController {
  constructor(private s:OpportunitiesService){}
  @Get() @Permissions('opportunities:read') fa(@Query() q:any){return this.s.findAll(q);}
  @Get(':id') @Permissions('opportunities:read') fo(@Param('id') id:string){return this.s.findOne(id);}
  @Post() @Permissions('opportunities:write') @HttpCode(201) cr(@Body() d:any,@CurrentUser() u:any){return this.s.create(d,u);}
  @Put(':id') @Permissions('opportunities:write') up(@Param('id') id:string,@Body() d:any,@CurrentUser() u:any){return this.s.update(id,d,u);}
  @Patch(':id/status') @Permissions('opportunities:write') st(@Param('id') id:string,@Body('status') s:string,@CurrentUser() u:any){return this.s.update(id,{status:s},u);}
  @Delete(':id') @Permissions('opportunities:delete') @HttpCode(204) rm(@Param('id') id:string,@CurrentUser() u:any){return this.s.remove(id,u);}
  @Get(':id/versions') @Permissions('opportunities:read') vr(@Param('id') id:string){return this.s.getVersions(id);}
}
@Module({imports:[AuditModule],controllers:[OpportunitiesController],providers:[OpportunitiesService]})
export class OpportunitiesModule {}


// ── SRP ──────────────────────────────────────────────────────────
@Injectable()
class SrpService {
  constructor(private p:PrismaService,private a:AuditService,private n:NotificationsService){}
  async findByOpp(id:string){const s=await this.p.srp.findUnique({where:{opportunityId:id}});if(!s)throw new NotFoundException('SRP not found');return s;}
  async update(id:string,dto:any,user:any){const before=await this.findByOpp(id);const s=await this.p.srp.update({where:{opportunityId:id},data:dto});await this.a.log({action:'Update' as any,entityType:'srps',entityId:s.id,opportunityId:id,userId:user?.id,description:'SRP updated'});await this.a.versionSnapshot('srps',s.id,id,before,user?.name||'System','SRP updated');return s;}
  async sendForApproval(id:string,user:any){const s=await this.p.srp.update({where:{opportunityId:id},data:{status:'SentForApproval',sentForApprovalAt:new Date()}});await this.p.opportunity.update({where:{id},data:{srpStatus:'SentForApproval'}});await this.a.log({action:'Approve' as any,entityType:'srps',entityId:s.id,opportunityId:id,userId:user?.id,description:'SRP sent for approval'});await this.n.push({userId:user?.id,type:'SrpApproval',priority:'High',title:'SRP pending approval',body:'Awaiting commercial lead review',entityType:'opportunities',entityId:id});return s;}
  async approve(id:string,user:any,comments?:string){const s=await this.p.srp.update({where:{opportunityId:id},data:{status:'Approved',approvedAt:new Date(),approvedBy:user?.name,approvalComments:comments}});await this.p.opportunity.update({where:{id},data:{srpStatus:'Approved'}});await this.a.log({action:'Approve' as any,entityType:'srps',entityId:s.id,opportunityId:id,userId:user?.id,description:'SRP approved',afterVal:{approvedBy:user?.name}});return s;}
  async reject(id:string,user:any,comments?:string){const s=await this.p.srp.update({where:{opportunityId:id},data:{status:'Rejected',approvalComments:comments}});await this.p.opportunity.update({where:{id},data:{srpStatus:'Rejected'}});await this.a.log({action:'Reject' as any,entityType:'srps',entityId:s.id,opportunityId:id,userId:user?.id,description:'SRP rejected'});return s;}
}
@ApiTags('SRP') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'srp',version:'1'})
class SrpController {
  constructor(private s:SrpService){}
  @Get(':oid') @Permissions('srp:read') fo(@Param('oid') id:string){return this.s.findByOpp(id);}
  @Put(':oid') @Permissions('srp:write') up(@Param('oid') id:string,@Body() d:any,@CurrentUser() u:any){return this.s.update(id,d,u);}
  @Post(':oid/send-approval') @Permissions('srp:write') sa(@Param('oid') id:string,@CurrentUser() u:any){return this.s.sendForApproval(id,u);}
  @Post(':oid/approve') @Permissions('srp:approve') ap(@Param('oid') id:string,@CurrentUser() u:any,@Body('comments') c:string){return this.s.approve(id,u,c);}
  @Post(':oid/reject') @Permissions('srp:approve') rj(@Param('oid') id:string,@CurrentUser() u:any,@Body('comments') c:string){return this.s.reject(id,u,c);}
}
@Module({imports:[AuditModule,NotificationsModule],controllers:[SrpController],providers:[SrpService]})
export class SrpModule {}

// ── FEE CALCULATOR ────────────────────────────────────────────────
function fcTotals(d:any){
  const tc=(d.timeCharges||[]) as any[],nsf=(d.nonSfr||[]) as any[],dis=(d.disbursements||[]) as any[];
  const tcT=tc.filter(r=>!r.ceId).reduce((a:number,r:any)=>a+((r.overrideRate||r.hourlyRate||0)*(r.estHours||0))+(r.inflationAmount||0),0);
  const extT=nsf.filter(r=>!r.ceId).reduce((a:number,r:any)=>a+(+r.netFee||0),0);
  const disT=dis.filter(r=>!r.ceId).reduce((a:number,r:any)=>a+(+r.netFee||0),0);
  const pscPct=d.overridePscPct>0?+d.overridePscPct:(PSC_RATES[d.procRoute as string]||2.45);
  const pscFee=(tcT+extT)*pscPct/100;
  return {totalTimeCharges:tcT,totalExtConsultancy:extT,totalDisbursements:disT,pscFee,grandTotal:tcT+extT+pscFee+disT};
}
@Injectable()
class FeeCalculatorService {
  constructor(private p:PrismaService,private a:AuditService){}
  async findByOpp(id:string){const f=await this.p.feeCalculator.findUnique({where:{opportunityId:id}});if(!f)throw new NotFoundException('FC not found');return f;}
  async update(id:string,dto:any,user:any){const before=await this.findByOpp(id);const tots=fcTotals(dto);const f=await this.p.feeCalculator.update({where:{opportunityId:id},data:{...dto,...tots}});await this.a.log({action:'Update' as any,entityType:'fee_calculators',entityId:f.id,opportunityId:id,userId:user?.id,description:`FC updated — £${tots.grandTotal.toFixed(0)}`,beforeVal:{grandTotal:Number(before.grandTotal)},afterVal:{grandTotal:tots.grandTotal}});await this.a.versionSnapshot('fee_calculators',f.id,id,before,user?.name||'System','FC updated');return f;}
}
@ApiTags('Fee Calculator') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'fee-calculator',version:'1'})
class FeeCalculatorController {
  constructor(private s:FeeCalculatorService){}
  @Get(':oid') @Permissions('fee_calculator:read') fo(@Param('oid') id:string){return this.s.findByOpp(id);}
  @Put(':oid') @Permissions('fee_calculator:write') up(@Param('oid') id:string,@Body() d:any,@CurrentUser() u:any){return this.s.update(id,d,u);}
}
@Module({imports:[AuditModule],controllers:[FeeCalculatorController],providers:[FeeCalculatorService]})
export class FeeCalculatorModule {}

// ── INVOICES ─────────────────────────────────────────────────────
@Injectable()
class InvoicesService {
  constructor(private p:PrismaService,private a:AuditService){}
  async clientList(q:any){const take=Math.min(+(q.pageSize||20),100),skip=((+(q.page||1))-1)*take;const w:any={...(q.status&&{status:q.status}),...(q.q?{OR:[{invoiceRef:{contains:q.q,mode:'insensitive'}},{schedule:{opportunity:{clientName:{contains:q.q,mode:'insensitive'}}}},{schedule:{opportunity:{commNum:{contains:q.q,mode:'insensitive'}}}}]}:{})};const[d,t]=await Promise.all([this.p.clientInvoice.findMany({where:w,skip,take,orderBy:{issuedAt:'desc'},include:{schedule:{include:{opportunity:{select:{commNum:true,name:true,clientName:true}}}}}}),this.p.clientInvoice.count({where:w})]);return{data:d,meta:meta(t,+(q.page||1),take)};}
  async supplierList(q:any){const take=Math.min(+(q.pageSize||20),100),skip=((+(q.page||1))-1)*take;const w:any={...(q.status&&{status:q.status}),...(q.q?{OR:[{invoiceRef:{contains:q.q,mode:'insensitive'}},{supplierName:{contains:q.q,mode:'insensitive'}}]}:{})};const[d,t]=await Promise.all([this.p.supplierInvoice.findMany({where:w,skip,take,orderBy:{receivedAt:'desc'},include:{schedule:{include:{opportunity:{select:{commNum:true,name:true}}}}}}),this.p.supplierInvoice.count({where:w})]);return{data:d,meta:meta(t,+(q.page||1),take)};}
  async updateClientStatus(id:string,status:string,user:any){const i=await this.p.clientInvoice.update({where:{id},data:{status:status as any,...(status==='Paid'&&{paidAt:new Date()})}});await this.a.log({action:'Update' as any,entityType:'client_invoices',entityId:id,userId:user?.id,description:`Invoice ${i.invoiceRef} → ${status}`});return i;}
}
@ApiTags('Invoices') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'invoices',version:'1'})
class InvoicesController {
  constructor(private s:InvoicesService){}
  @Get('client') @Permissions('invoices:read') cl(@Query() q:any){return this.s.clientList(q);}
  @Get('supplier') @Permissions('invoices:read') sl(@Query() q:any){return this.s.supplierList(q);}
  @Patch('client/:id/status') @Permissions('invoices:write') us(@Param('id') id:string,@Body('status') s:string,@CurrentUser() u:any){return this.s.updateClientStatus(id,s,u);}
}
@Module({imports:[AuditModule],controllers:[InvoicesController],providers:[InvoicesService]})
export class InvoicesModule {}


// ── CE EVENTS ────────────────────────────────────────────────────
@Injectable()
class CeService {
  constructor(private p:PrismaService,private a:AuditService,private n:NotificationsService){}
  async findAll(q:any){const take=Math.min(+(q.pageSize||20),100),skip=((+(q.page||1))-1)*take;const w:any={...(q.opportunityId&&{opportunityId:q.opportunityId}),...(q.q?{OR:[{ceRef:{contains:q.q,mode:'insensitive'}},{description:{contains:q.q,mode:'insensitive'}},{opportunity:{commNum:{contains:q.q,mode:'insensitive'}}}]}:{})};const[d,t]=await Promise.all([this.p.ceEvent.findMany({where:w,skip,take,orderBy:{raisedAt:'desc'},include:{opportunity:{select:{commNum:true,name:true,clientName:true}}}}),this.p.ceEvent.count({where:w})]);return{data:d,meta:meta(t,+(q.page||1),take)};}
  async create(dto:any,user:any){const opp=await this.p.opportunity.findUnique({where:{id:dto.opportunityId},select:{commNum:true}});if(!opp)throw new NotFoundException('Opportunity not found');const ce=await this.p.ceEvent.create({data:{...dto,raisedBy:user?.name}});await this.a.log({action:'Create' as any,entityType:'ce_events',entityId:ce.id,opportunityId:dto.opportunityId,userId:user?.id,description:`CE ${ce.ceRef} raised on ${opp.commNum}`,afterVal:{value:Number(ce.value)}});return ce;}
  async updateStage(id:string,stage:string,user:any){const ce=await this.p.ceEvent.update({where:{id},data:{stage:stage as any}});await this.a.log({action:'Update' as any,entityType:'ce_events',entityId:id,opportunityId:ce.opportunityId,userId:user?.id,description:`CE ${ce.ceRef} → ${stage}`});return ce;}
}
@ApiTags('CE') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'ce',version:'1'})
class CeController {
  constructor(private s:CeService){}
  @Get() @Permissions('ce:read') fa(@Query() q:any){return this.s.findAll(q);}
  @Post() @Permissions('ce:write') @HttpCode(201) cr(@Body() d:any,@CurrentUser() u:any){return this.s.create(d,u);}
  @Patch(':id/stage') @Permissions('ce:write') us(@Param('id') id:string,@Body('stage') s:string,@CurrentUser() u:any){return this.s.updateStage(id,s,u);}
}
@Module({imports:[AuditModule,NotificationsModule],controllers:[CeController],providers:[CeService]})
export class CeModule {}

// ── PROJECT PI ────────────────────────────────────────────────────
@Injectable()
class ProjectPiService {
  constructor(private p:PrismaService,private a:AuditService){}
  async findAll(q:any){const take=Math.min(+(q.pageSize||20),100),skip=((+(q.page||1))-1)*take;const w:any=q.q?{OR:[{opportunity:{commNum:{contains:q.q,mode:'insensitive'}}},{opportunity:{clientName:{contains:q.q,mode:'insensitive'}}}]}:{};const[d,t]=await Promise.all([this.p.projectPi.findMany({where:w,skip,take,include:{opportunity:{select:{commNum:true,name:true,clientName:true,lead:{select:{name:true}}}}}}),this.p.projectPi.count({where:w})]);return{data:d,meta:meta(t,+(q.page||1),take)};}
  async update(oid:string,dto:any,user:any){const pi=await this.p.projectPi.update({where:{opportunityId:oid},data:dto});await this.a.log({action:'Update' as any,entityType:'project_pis',entityId:pi.id,opportunityId:oid,userId:user?.id,description:'PI updated'});return pi;}
  async approve(oid:string,user:any){const before=await this.p.projectPi.findUnique({where:{opportunityId:oid},select:{version:true}});const pi=await this.p.projectPi.update({where:{opportunityId:oid},data:{status:'Approved',approver:user?.name,approvedAt:new Date(),version:(before?.version||1)+1}});await this.a.log({action:'Approve' as any,entityType:'project_pis',entityId:pi.id,opportunityId:oid,userId:user?.id,description:`PI approved v${pi.version}`});return pi;}
}
@ApiTags('Project PI') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'project-pi',version:'1'})
class ProjectPiController {
  constructor(private s:ProjectPiService){}
  @Get() @Permissions('pi:read') fa(@Query() q:any){return this.s.findAll(q);}
  @Put(':oid') @Permissions('pi:write') up(@Param('oid') id:string,@Body() d:any,@CurrentUser() u:any){return this.s.update(id,d,u);}
  @Post(':oid/approve') @Permissions('pi:approve') ap(@Param('oid') id:string,@CurrentUser() u:any){return this.s.approve(id,u);}
}
@Module({imports:[AuditModule],controllers:[ProjectPiController],providers:[ProjectPiService]})
export class ProjectPiModule {}

// ── SURVEYS ──────────────────────────────────────────────────────
@Injectable()
class SurveysService {
  constructor(private p:PrismaService){}
  async findAll(q:any){const take=Math.min(+(q.pageSize||20),100),skip=((+(q.page||1))-1)*take;const w:any={...(q.type&&{type:q.type}),...(q.q?{OR:[{opportunity:{clientName:{contains:q.q,mode:'insensitive'}}},{opportunity:{commNum:{contains:q.q,mode:'insensitive'}}}]}:{})};const[d,t]=await Promise.all([this.p.survey.findMany({where:w,skip,take,orderBy:{createdAt:'desc'},include:{opportunity:{select:{commNum:true,name:true,clientName:true}},supplier:{select:{name:true}}}}),this.p.survey.count({where:w})]);return{data:d,meta:meta(t,+(q.page||1),take)};}
  async submit(id:string,r:any){return this.p.survey.update({where:{id},data:{responses:r,submittedAt:new Date(),satisfaction:r.satisfaction,nps:r.nps}});}
}
@ApiTags('Surveys') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'surveys',version:'1'})
class SurveysController {
  constructor(private s:SurveysService){}
  @Get() @Permissions('surveys:read') fa(@Query() q:any){return this.s.findAll(q);}
  @Post(':id/submit') sb(@Param('id') id:string,@Body() b:any){return this.s.submit(id,b);}
}
@Module({controllers:[SurveysController],providers:[SurveysService]})
export class SurveysModule {}

// ── SUPPLIERS ─────────────────────────────────────────────────────
@Injectable()
class SuppliersService {
  constructor(private p:PrismaService,private a:AuditService){}
  async findAll(q:any){const take=Math.min(+(q.pageSize||20),100),skip=((+(q.page||1))-1)*take;const w:any={...(q.status&&{status:q.status}),...(q.q?{OR:[{name:{contains:q.q,mode:'insensitive'}},{type:{contains:q.q,mode:'insensitive'}}]}:{})};const[d,t]=await Promise.all([this.p.supplier.findMany({where:w,skip,take,orderBy:{name:'asc'}}),this.p.supplier.count({where:w})]);return{data:d,meta:meta(t,+(q.page||1),take)};}
  async findOne(id:string){const s=await this.p.supplier.findUnique({where:{id}});if(!s)throw new NotFoundException('Supplier not found');return s;}
  async create(dto:any,user:any){const s=await this.p.supplier.create({data:dto});await this.a.log({action:'Create' as any,entityType:'suppliers',entityId:s.id,userId:user?.id,description:`Supplier ${s.name} created`});return s;}
  async update(id:string,dto:any,user:any){const s=await this.p.supplier.update({where:{id},data:dto});await this.a.log({action:'Update' as any,entityType:'suppliers',entityId:id,userId:user?.id,description:`Supplier ${s.name} updated`});return s;}
}
@ApiTags('Suppliers') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'suppliers',version:'1'})
class SuppliersController {
  constructor(private s:SuppliersService){}
  @Get() @Permissions('suppliers:read') fa(@Query() q:any){return this.s.findAll(q);}
  @Get(':id') @Permissions('suppliers:read') fo(@Param('id') id:string){return this.s.findOne(id);}
  @Post() @Permissions('suppliers:write') @HttpCode(201) cr(@Body() d:any,@CurrentUser() u:any){return this.s.create(d,u);}
  @Put(':id') @Permissions('suppliers:write') up(@Param('id') id:string,@Body() d:any,@CurrentUser() u:any){return this.s.update(id,d,u);}
}
@Module({imports:[AuditModule],controllers:[SuppliersController],providers:[SuppliersService]})
export class SuppliersModule {}


// ── USERS ─────────────────────────────────────────────────────────
@Injectable()
class UsersService {
  constructor(private p:PrismaService,private a:AuditService){}
  async findAll(q:any){const take=Math.min(+(q.pageSize||20),100),skip=((+(q.page||1))-1)*take;const w:any={...(q.status&&{status:q.status}),...(q.q?{OR:[{name:{contains:q.q,mode:'insensitive'}},{email:{contains:q.q,mode:'insensitive'}},{region:{contains:q.q,mode:'insensitive'}}]}:{})};const[d,t]=await Promise.all([this.p.user.findMany({where:w,skip,take,orderBy:{name:'asc'},include:{roles:{include:{role:{select:{id:true,name:true,color:true}}}}}}),this.p.user.count({where:w})]);return{data:d,meta:meta(t,+(q.page||1),take)};}
  async findOne(id:string){const u=await this.p.user.findUnique({where:{id},include:{roles:{include:{role:true}}}});if(!u)throw new NotFoundException('User not found');return u;}
  async sync(dto:any){return this.p.user.upsert({where:{email:dto.email},update:{name:dto.name,status:dto.status||'Active',region:dto.region,businessUnit:dto.businessUnit,externalId:dto.externalId},create:{...dto,initials:dto.name.split(' ').map((n:string)=>n[0]).join('').substring(0,3).toUpperCase(),avatarColor:dto.avatarColor||'#3d7eff'}});}
  async updateStatus(id:string,status:string,user:any){const u=await this.p.user.update({where:{id},data:{status:status as any}});await this.a.log({action:'Update' as any,entityType:'users',entityId:id,userId:user?.id,description:`User ${u.name} → ${status}`,afterVal:{status}});return u;}
  async assignRole(uid:string,rid:string,grantor:any){await this.p.userRole.upsert({where:{userId_roleId:{userId:uid,roleId:rid}},create:{userId:uid,roleId:rid,grantedBy:grantor?.id},update:{grantedBy:grantor?.id}});await this.a.log({action:'Update' as any,entityType:'users',entityId:uid,userId:grantor?.id,description:`Role assigned to ${uid}`});}
  async removeRole(uid:string,rid:string,grantor:any){await this.p.userRole.delete({where:{userId_roleId:{userId:uid,roleId:rid}}});await this.a.log({action:'Update' as any,entityType:'users',entityId:uid,userId:grantor?.id,description:`Role removed from ${uid}`});}
}
@ApiTags('Users') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'users',version:'1'})
class UsersController {
  constructor(private s:UsersService){}
  @Get() @Permissions('users:read') fa(@Query() q:any){return this.s.findAll(q);}
  @Get(':id') @Permissions('users:read') fo(@Param('id') id:string){return this.s.findOne(id);}
  @Post('sync') @Permissions('users:write') sy(@Body() d:any){return this.s.sync(d);}
  @Patch(':id/status') @Permissions('users:write') us(@Param('id') id:string,@Body('status') s:string,@CurrentUser() u:any){return this.s.updateStatus(id,s,u);}
  @Post(':uid/roles/:rid') @Permissions('users:write') ar(@Param('uid') uid:string,@Param('rid') rid:string,@CurrentUser() u:any){return this.s.assignRole(uid,rid,u);}
  @Delete(':uid/roles/:rid') @Permissions('users:write') rr(@Param('uid') uid:string,@Param('rid') rid:string,@CurrentUser() u:any){return this.s.removeRole(uid,rid,u);}
}
@Module({imports:[AuditModule],controllers:[UsersController],providers:[UsersService],exports:[UsersService]})
export class UsersModule {}

// ── ROLES ─────────────────────────────────────────────────────────
@Injectable()
class RolesService {
  constructor(private p:PrismaService,private a:AuditService){}
  async findAll(q:any){const w:any=q.q?{name:{contains:q.q,mode:'insensitive'}}:{};const d=await this.p.role.findMany({where:w,orderBy:{sortOrder:'asc'},include:{_count:{select:{users:true}}}});return{data:d,meta:meta(d.length,1,d.length)};}
  async findOne(id:string){const r=await this.p.role.findUnique({where:{id},include:{users:{include:{user:{select:{id:true,name:true,email:true,initials:true,avatarColor:true}}}}}});if(!r)throw new NotFoundException('Role not found');return r;}
  async create(dto:any,user:any){const r=await this.p.role.create({data:{...dto,isSystem:false}});await this.a.log({action:'Create' as any,entityType:'roles',entityId:r.id,userId:user?.id,description:`Role ${r.name} created`});return r;}
  async update(id:string,dto:any,user:any){const ex=await this.p.role.findUnique({where:{id},select:{isSystem:true,name:true}});if(ex?.isSystem&&dto.permissions)throw new BadRequestException('Cannot modify system role permissions');const r=await this.p.role.update({where:{id},data:dto});await this.a.log({action:'Update' as any,entityType:'roles',entityId:id,userId:user?.id,description:`Role ${ex?.name} updated`});return r;}
  async clone(id:string,user:any){const s=await this.findOne(id);const r=await this.p.role.create({data:{name:`${s.name} (Copy)`,description:s.description||undefined,color:s.color||undefined,icon:s.icon||undefined,permissions:s.permissions as any,isSystem:false,isActive:true}});await this.a.log({action:'Create' as any,entityType:'roles',entityId:r.id,userId:user?.id,description:`Role cloned from ${s.name}`});return r;}
}
@ApiTags('Roles') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'roles',version:'1'})
class RolesController {
  constructor(private s:RolesService){}
  @Get() @Permissions('roles:read') fa(@Query() q:any){return this.s.findAll(q);}
  @Get(':id') @Permissions('roles:read') fo(@Param('id') id:string){return this.s.findOne(id);}
  @Post() @Permissions('roles:write') @HttpCode(201) cr(@Body() d:any,@CurrentUser() u:any){return this.s.create(d,u);}
  @Put(':id') @Permissions('roles:write') up(@Param('id') id:string,@Body() d:any,@CurrentUser() u:any){return this.s.update(id,d,u);}
  @Post(':id/clone') @Permissions('roles:write') cl(@Param('id') id:string,@CurrentUser() u:any){return this.s.clone(id,u);}
}
@Module({imports:[AuditModule],controllers:[RolesController],providers:[RolesService]})
export class RolesModule {}

// ── DELEGATION ────────────────────────────────────────────────────
@Injectable()
class DelegationService {
  constructor(private p:PrismaService,private a:AuditService,private n:NotificationsService){}
  async findAll(q:any){const take=Math.min(+(q.pageSize||20),100),skip=((+(q.page||1))-1)*take;const w:any={...(q.status&&{status:q.status}),...(q.q?{OR:[{fromUser:{name:{contains:q.q,mode:'insensitive'}}},{toUser:{name:{contains:q.q,mode:'insensitive'}}},{scope:{contains:q.q,mode:'insensitive'}}]}:{})};const[d,t]=await Promise.all([this.p.delegation.findMany({where:w,skip,take,orderBy:{createdAt:'desc'},include:{fromUser:{select:{name:true,initials:true,avatarColor:true}},toUser:{select:{name:true,initials:true,avatarColor:true}}}}),this.p.delegation.count({where:w})]);return{data:d,meta:meta(t,+(q.page||1),take)};}
  async create(dto:any,user:any){if(dto.fromUserId===dto.toUserId)throw new BadRequestException('From/To users must differ');if(new Date(dto.endDate)<=new Date(dto.startDate))throw new BadRequestException('End date must be after start date');const d=await this.p.delegation.create({data:{...dto,createdById:user?.id,status:'Pending'},include:{fromUser:{select:{name:true}},toUser:{select:{name:true}}}});await this.a.log({action:'Create' as any,entityType:'delegations',entityId:d.id,userId:user?.id,description:`Delegation: ${d.fromUser.name} → ${d.toUser.name}`,afterVal:{type:dto.type}});await this.n.push({userId:dto.toUserId,type:'Delegation',priority:'Low',title:`Delegation from ${d.fromUser.name}`,body:`${dto.type} · ${dto.scope}`});return d;}
  async revoke(id:string,user:any){const d=await this.p.delegation.update({where:{id},data:{status:'Revoked',revokedAt:new Date()}});await this.a.log({action:'Update' as any,entityType:'delegations',entityId:id,userId:user?.id,description:'Delegation revoked'});return d;}
  async expireOverdue(){return this.p.delegation.updateMany({where:{status:'Active',endDate:{lt:new Date()}},data:{status:'Expired'}});}
}
@ApiTags('Delegations') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'delegations',version:'1'})
class DelegationController {
  constructor(private s:DelegationService){}
  @Get() @Permissions('delegations:read') fa(@Query() q:any){return this.s.findAll(q);}
  @Post() @Permissions('delegations:write') @HttpCode(201) cr(@Body() d:any,@CurrentUser() u:any){return this.s.create(d,u);}
  @Patch(':id/revoke') @Permissions('delegations:write') rv(@Param('id') id:string,@CurrentUser() u:any){return this.s.revoke(id,u);}
  @Post('expire-all') expire(){return this.s.expireOverdue();}
}
@Module({imports:[AuditModule,NotificationsModule],controllers:[DelegationController],providers:[DelegationService]})
export class DelegationModule {}

// ── MASTER LOOKUP ─────────────────────────────────────────────────
@Injectable()
class MasterLookupService {
  constructor(private p:PrismaService,private a:AuditService){}
  async findByCategory(cat:string){return this.p.masterLookup.findMany({where:{category:cat,isActive:true},orderBy:{sortOrder:'asc'}});}
  async findAll(q:any){const take=Math.min(+(q.pageSize||100),500),skip=((+(q.page||1))-1)*take;const w:any={isActive:true,...(q.category&&{category:q.category}),...(q.q&&{label:{contains:q.q,mode:'insensitive'}})};const[d,t]=await Promise.all([this.p.masterLookup.findMany({where:w,skip,take,orderBy:[{category:'asc'},{sortOrder:'asc'}]}),this.p.masterLookup.count({where:w})]);return{data:d,meta:meta(t,+(q.page||1),take)};}
  async upsert(category:string,code:string|undefined,label:string,mdata:any,user:any){const item=await this.p.masterLookup.upsert({where:{category_code:{category,code:code||''}},update:{label,metadata:mdata,updatedAt:new Date()},create:{category,code,label,metadata:mdata||{}}});await this.a.log({action:'Update' as any,entityType:'master_lookups',entityId:item.id,userId:user?.id,description:`ML ${category}/${label} updated`});return item;}
  async deactivate(id:string,user:any){const item=await this.p.masterLookup.update({where:{id},data:{isActive:false}});await this.a.log({action:'Delete' as any,entityType:'master_lookups',entityId:id,userId:user?.id,description:`ML ${item.category}/${item.label} deactivated`});return item;}
  async getGrades(){return this.p.staffGrade.findMany({where:{isActive:true},orderBy:{sortOrder:'asc'}});}
  async createGrade(dto:any,user:any){const g=await this.p.staffGrade.create({data:dto});await this.a.log({action:'Create' as any,entityType:'staff_grades',entityId:g.id,userId:user?.id,description:`Grade ${g.grade} created £${g.rate}/hr`});return g;}
  async updateGrade(id:string,dto:any,user:any){const g=await this.p.staffGrade.update({where:{id},data:dto});await this.a.log({action:'Update' as any,entityType:'staff_grades',entityId:id,userId:user?.id,description:`Grade ${g.grade} → £${g.rate}/hr`});return g;}
  async getBandRates(){return this.p.peopleBandRate.findMany({orderBy:{dateFrom:'desc'}});}
}
@ApiTags('Master Lookup') @ApiBearerAuth() @UseGuards(JwtAuthGuard,RbacGuard)
@Controller({path:'master-lookup',version:'1'})
class MasterLookupController {
  constructor(private s:MasterLookupService){}
  @Get() @Permissions('master_lookup:read') fa(@Query() q:any){return this.s.findAll(q);}
  @Get('category/:cat') @Permissions('master_lookup:read') bc(@Param('cat') c:string){return this.s.findByCategory(c);}
  @Get('staff-grades') @Permissions('master_lookup:read') gg(){return this.s.getGrades();}
  @Post('staff-grades') @Permissions('master_lookup:write') @HttpCode(201) cg(@Body() d:any,@CurrentUser() u:any){return this.s.createGrade(d,u);}
  @Put('staff-grades/:id') @Permissions('master_lookup:write') ug(@Param('id') id:string,@Body() d:any,@CurrentUser() u:any){return this.s.updateGrade(id,d,u);}
  @Get('people-band-rates') @Permissions('master_lookup:read') br(){return this.s.getBandRates();}
  @Put('upsert') @Permissions('master_lookup:write') up(@Body() d:any,@CurrentUser() u:any){return this.s.upsert(d.category,d.code,d.label,d.metadata,u);}
  @Delete(':id') @Permissions('master_lookup:write') rm(@Param('id') id:string,@CurrentUser() u:any){return this.s.deactivate(id,u);}
}
@Module({imports:[AuditModule],controllers:[MasterLookupController],providers:[MasterLookupService],exports:[MasterLookupService]})
export class MasterLookupModule {}

// ── DASHBOARD ─────────────────────────────────────────────────────
@Injectable()
class DashboardService {
  constructor(private p: PrismaService) {}
  async getSummary() {
    const [allOpps,ceActive,paidAgg,pendingAgg,overdueAgg,pendingCnt,overdueCnt,piApproved,surveyPending,expiredSupp,recentOpps,milestones] = await Promise.all([
      this.p.opportunity.findMany({ select:{ status:true, value:true } }),
      this.p.ceEvent.count({ where:{ stage:{ notIn:['Approved','Rejected'] as any[] } } }),
      this.p.clientInvoice.aggregate({ where:{ status:'Paid' as any }, _sum:{ netAmount:true } }),
      this.p.clientInvoice.aggregate({ where:{ status:'Pending' as any }, _sum:{ netAmount:true } }),
      this.p.clientInvoice.aggregate({ where:{ status:'Overdue' as any }, _sum:{ netAmount:true } }),
      this.p.clientInvoice.count({ where:{ status:'Pending' as any } }),
      this.p.clientInvoice.count({ where:{ status:'Overdue' as any } }),
      this.p.projectPi.count({ where:{ status:'Approved' } }),
      this.p.survey.count({ where:{ submittedAt:null } }),
      this.p.supplier.count({ where:{ status:'Expired' as any } }),
      this.p.opportunity.findMany({ take:5, orderBy:{ createdAt:'desc' }, select:{ id:true, commNum:true, name:true, clientName:true, status:true, stagePercent:true, value:true, lead:{ select:{ name:true, initials:true, avatarColor:true } } } }),
      // Show unpaid milestones regardless of date (covers past-due + upcoming)
      this.p.invoiceSchedule.findMany({
        where:{ clientInvoices:{ some:{ status:{ in:['Pending','Overdue'] as any[] } } } },
        take:5,
        orderBy:{ dueDate:'asc' },
        select:{ id:true, milestone:true, dueDate:true, opportunity:{ select:{ commNum:true } }, clientInvoices:{ select:{ status:true, netAmount:true } } },
      }),
    ]);
    const totalPipeline = allOpps.reduce((a,o) => a + Number(o.value), 0);
    const pipelineByStatus = ['Lead','Probable','StrongProbable','Contracted','WorkStarted','Completed'].map(s => ({
      status:s,
      value: allOpps.filter((o:any) => o.status===s).reduce((a,o) => a+Number(o.value),0),
      count: allOpps.filter((o:any) => o.status===s).length,
    }));
    return {
      kpis:{ totalPipeline, totalPipelineCount:allOpps.length, invoicedPaid:Number(paidAgg._sum.netAmount||0), outstandingAmount:Number(pendingAgg._sum.netAmount||0)+Number(overdueAgg._sum.netAmount||0), outstandingCount:pendingCnt+overdueCnt, expiredSuppliers:expiredSupp },
      pipelineByStatus,
      workflowStatus:{ opportunities:allOpps.length, activeCEs:ceActive, pendingInvoices:pendingCnt, approvedPIs:piApproved, finalReady:0, surveysPending:surveyPending },
      recentCommissions: recentOpps.map((o:any) => ({ ...o, value:Number(o.value) })),
      upcomingMilestones: milestones.map((m:any) => ({ id:m.id, milestone:m.milestone, dueDate:m.dueDate, commNum:m.opportunity.commNum, amount:m.clientInvoices.reduce((a:number,i:any)=>a+Number(i.netAmount),0), status:m.clientInvoices[0]?.status||'Upcoming' })),
      alerts:{ expiredSuppliers:expiredSupp },
    };
  }
}
@ApiTags('Dashboard') @ApiBearerAuth() @UseGuards(JwtAuthGuard)
@Controller({ path:'dashboard', version:'1' })
class DashboardController {
  constructor(private s: DashboardService) {}
  @Get() gs() { return this.s.getSummary(); }
}
@Module({ controllers:[DashboardController], providers:[DashboardService] })
export class DashboardModule {}
