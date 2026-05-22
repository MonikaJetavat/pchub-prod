import { Module, Global, Controller, Get, Patch, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Notifications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller({ path: 'notifications', version: '1' })
class NotificationsController {
  constructor(private readonly svc: NotificationsService) {}
  @Get() findMine(@CurrentUser() u: any, @Query() q: any) { return this.svc.findForUser(u.id, q); }
  @Get('unread-count') unreadCount(@CurrentUser() u: any) { return this.svc.unreadCount(u.id); }
  @Patch(':id/read') markRead(@Param('id') id: string, @CurrentUser() u: any) { return this.svc.markRead(id, u.id); }
  @Patch('read-all') markAllRead(@CurrentUser() u: any) { return this.svc.markAllRead(u.id); }
}

@Global()
@Module({
  providers: [NotificationsService],
  controllers: [NotificationsController],
  exports: [NotificationsService],
})
export class NotificationsModule {}
