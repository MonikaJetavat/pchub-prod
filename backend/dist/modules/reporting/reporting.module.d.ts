import { PrismaService } from '../../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
export declare class ReportingService {
    private readonly prisma;
    private readonly audit;
    constructor(prisma: PrismaService, audit: AuditService);
    pipelineReport(q: any): Promise<{
        kpis: {
            totalCommissions: number;
            totalPipeline: number;
            contracted: number;
            completed: number;
            avgValue: number;
        };
        byStatus: {
            status: any;
            count: number;
            value: number;
        }[];
        bySector: {
            name: any;
            count: number;
            value: number;
        }[];
        byRegion: {
            name: any;
            count: number;
            value: number;
        }[];
        rows: ({
            lead: {
                name: string;
            };
        } & {
            id: string;
            name: string;
            status: import(".prisma/client").$Enums.OppStatus;
            region: string | null;
            createdAt: Date;
            updatedAt: Date;
            clientName: string;
            value: import("@prisma/client/runtime/library").Decimal;
            commNum: string;
            stagePercent: number;
            leadId: string | null;
            sector: string | null;
            services: string[];
            srpStatus: import(".prisma/client").$Enums.SrpStatus;
        })[];
    }>;
    ceReport(q: any): Promise<{
        kpis: {
            total: number;
            totalValue: number;
            approved: number;
            open: number;
        };
        byStage: {
            stage: any;
            count: number;
            value: number;
        }[];
        rows: ({
            opportunity: {
                clientName: string;
                commNum: string;
                lead: {
                    name: string;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            opportunityId: string;
            metadata: import("@prisma/client/runtime/library").JsonValue;
            value: import("@prisma/client/runtime/library").Decimal;
            ceRef: string;
            stage: import(".prisma/client").$Enums.CeStage;
            raisedAt: Date;
            raisedBy: string | null;
        })[];
    }>;
    srpReport(q: any): Promise<{
        kpis: {
            total: number;
            approved: number;
            pending: number;
            overdue: number;
            draft: number;
        };
        byStatus: {
            status: string;
            count: number;
        }[];
        overdue: {
            daysPending: number;
            opportunity: {
                name: string;
                clientName: string;
                commNum: string;
                lead: {
                    name: string;
                };
            };
            id: string;
            status: import(".prisma/client").$Enums.SrpStatus;
            createdAt: Date;
            updatedAt: Date;
            startDate: Date | null;
            endDate: Date | null;
            opportunityId: string;
            clientContactName: string | null;
            clientContactEmail: string | null;
            clientContactTel: string | null;
            clientContactPosition: string | null;
            commissionLead: string | null;
            commissionLeadEmail: string | null;
            commissionLeadMobile: string | null;
            serviceManager: string | null;
            commissionDesc: string | null;
            commissionPostCode: string | null;
            mainContractType: string | null;
            confidentialityFlag: string;
            hasProgramme: string;
            hasProjectBrief: string;
            hasSchemeLayout: string;
            preEngagementRequired: string;
            preEngagementItems: import("@prisma/client/runtime/library").JsonValue;
            projectOverview: string | null;
            objectives: string | null;
            healthSafety: string | null;
            vfmStatement: string | null;
            vfmDriver1: string | null;
            vfmDriver2: string | null;
            vfmDriver3: string | null;
            projectSuccessCriteria: string | null;
            socialValue: string | null;
            tomsRows: import("@prisma/client/runtime/library").JsonValue;
            s61: string | null;
            s62: string | null;
            s63: string | null;
            s65: string | null;
            s66: string | null;
            s70: string | null;
            s90: string | null;
            s100: string | null;
            s110: string | null;
            s120: string | null;
            s130: string | null;
            s140: string | null;
            s150: string | null;
            nonCoreServices: import("@prisma/client/runtime/library").JsonValue;
            scopeSelections: import("@prisma/client/runtime/library").JsonValue;
            uploadOwnProgramme: string;
            deliveryRows: import("@prisma/client/runtime/library").JsonValue;
            selectedContractDesc: string | null;
            srpDeliveryMethod: string | null;
            commercialLead: string | null;
            approvalComments: string | null;
            approvedAt: Date | null;
            approvedBy: string | null;
            sentForApprovalAt: Date | null;
        }[];
        rows: ({
            opportunity: {
                name: string;
                clientName: string;
                commNum: string;
                lead: {
                    name: string;
                };
            };
        } & {
            id: string;
            status: import(".prisma/client").$Enums.SrpStatus;
            createdAt: Date;
            updatedAt: Date;
            startDate: Date | null;
            endDate: Date | null;
            opportunityId: string;
            clientContactName: string | null;
            clientContactEmail: string | null;
            clientContactTel: string | null;
            clientContactPosition: string | null;
            commissionLead: string | null;
            commissionLeadEmail: string | null;
            commissionLeadMobile: string | null;
            serviceManager: string | null;
            commissionDesc: string | null;
            commissionPostCode: string | null;
            mainContractType: string | null;
            confidentialityFlag: string;
            hasProgramme: string;
            hasProjectBrief: string;
            hasSchemeLayout: string;
            preEngagementRequired: string;
            preEngagementItems: import("@prisma/client/runtime/library").JsonValue;
            projectOverview: string | null;
            objectives: string | null;
            healthSafety: string | null;
            vfmStatement: string | null;
            vfmDriver1: string | null;
            vfmDriver2: string | null;
            vfmDriver3: string | null;
            projectSuccessCriteria: string | null;
            socialValue: string | null;
            tomsRows: import("@prisma/client/runtime/library").JsonValue;
            s61: string | null;
            s62: string | null;
            s63: string | null;
            s65: string | null;
            s66: string | null;
            s70: string | null;
            s90: string | null;
            s100: string | null;
            s110: string | null;
            s120: string | null;
            s130: string | null;
            s140: string | null;
            s150: string | null;
            nonCoreServices: import("@prisma/client/runtime/library").JsonValue;
            scopeSelections: import("@prisma/client/runtime/library").JsonValue;
            uploadOwnProgramme: string;
            deliveryRows: import("@prisma/client/runtime/library").JsonValue;
            selectedContractDesc: string | null;
            srpDeliveryMethod: string | null;
            commercialLead: string | null;
            approvalComments: string | null;
            approvedAt: Date | null;
            approvedBy: string | null;
            sentForApprovalAt: Date | null;
        })[];
    }>;
    invoiceReport(q: any): Promise<{
        kpis: {
            totalOutstanding: number;
            totalPaid: number;
            overdue: number;
            totalInvoices: number;
        };
        ageing: {
            label: string;
            count: number;
            value: number;
        }[];
        rows: ({
            schedule: {
                opportunity: {
                    clientName: string;
                    commNum: string;
                };
            } & {
                id: string;
                createdAt: Date;
                sortOrder: number;
                opportunityId: string;
                milestone: string;
                dueDate: Date;
            };
        } & {
            id: string;
            status: import(".prisma/client").$Enums.InvoiceStatus;
            createdAt: Date;
            updatedAt: Date;
            invoiceRef: string;
            invoiceScheduleId: string;
            netAmount: import("@prisma/client/runtime/library").Decimal;
            vatRate: import("@prisma/client/runtime/library").Decimal;
            vatAmount: import("@prisma/client/runtime/library").Decimal;
            totalAmount: import("@prisma/client/runtime/library").Decimal;
            issuedAt: Date | null;
            paidAt: Date | null;
            paymentTerms: number;
            notes: string | null;
        })[];
    }>;
    feeReport(q: any): Promise<{
        kpis: {
            totalForecast: number;
            totalConstruction: number;
            avgMargin: number;
            commissions: number;
        };
        byProcRoute: {
            name: string;
            count: number;
        }[];
        rows: ({
            opportunity: {
                name: string;
                status: import(".prisma/client").$Enums.OppStatus;
                clientName: string;
                value: import("@prisma/client/runtime/library").Decimal;
                commNum: string;
                lead: {
                    name: string;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            opportunityId: string;
            nonCoreServices: import("@prisma/client/runtime/library").JsonValue;
            inputDate: Date | null;
            constructionValue: import("@prisma/client/runtime/library").Decimal;
            preContractWeeks: number;
            postContractWeeks: number;
            procRoute: string;
            overridePscPct: import("@prisma/client/runtime/library").Decimal;
            contractLead: string | null;
            supervisor: string | null;
            bim: string;
            nec3OptionG: boolean;
            necContractForm: string | null;
            necOption: string | null;
            inflationRequired: string;
            inflationApplied: string;
            selectedServices: import("@prisma/client/runtime/library").JsonValue;
            secondaryServices: import("@prisma/client/runtime/library").JsonValue;
            timeCharges: import("@prisma/client/runtime/library").JsonValue;
            nonSfr: import("@prisma/client/runtime/library").JsonValue;
            disbursements: import("@prisma/client/runtime/library").JsonValue;
            ceList: import("@prisma/client/runtime/library").JsonValue;
            nextCeNum: number;
            totalPrimeCore: import("@prisma/client/runtime/library").Decimal;
            totalCore: import("@prisma/client/runtime/library").Decimal;
            totalTimeCharges: import("@prisma/client/runtime/library").Decimal;
            totalExtConsultancy: import("@prisma/client/runtime/library").Decimal;
            totalDisbursements: import("@prisma/client/runtime/library").Decimal;
            pscFee: import("@prisma/client/runtime/library").Decimal;
            grandTotal: import("@prisma/client/runtime/library").Decimal;
        })[];
    }>;
    activityReport(q: any): Promise<{
        data: ({
            user: {
                name: string;
                initials: string;
                avatarColor: string;
            };
        } & {
            id: string;
            createdAt: Date;
            description: string;
            isSystem: boolean;
            userId: string | null;
            action: import(".prisma/client").$Enums.AuditAction;
            entityType: string;
            entityId: string | null;
            isProxy: boolean;
            beforeVal: import("@prisma/client/runtime/library").JsonValue | null;
            afterVal: import("@prisma/client/runtime/library").JsonValue | null;
            comments: string | null;
            ipAddress: string | null;
            userAgent: string | null;
            opportunityId: string | null;
            proxyUserId: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            pageSize: number;
            pages: number;
        };
    }>;
    pendingActions(userId?: string): Promise<{
        total: number;
        sections: {
            srpApprovals: {
                count: number;
                items: ({
                    opportunity: {
                        name: string;
                        clientName: string;
                        commNum: string;
                        lead: {
                            name: string;
                        };
                    };
                } & {
                    id: string;
                    status: import(".prisma/client").$Enums.SrpStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    startDate: Date | null;
                    endDate: Date | null;
                    opportunityId: string;
                    clientContactName: string | null;
                    clientContactEmail: string | null;
                    clientContactTel: string | null;
                    clientContactPosition: string | null;
                    commissionLead: string | null;
                    commissionLeadEmail: string | null;
                    commissionLeadMobile: string | null;
                    serviceManager: string | null;
                    commissionDesc: string | null;
                    commissionPostCode: string | null;
                    mainContractType: string | null;
                    confidentialityFlag: string;
                    hasProgramme: string;
                    hasProjectBrief: string;
                    hasSchemeLayout: string;
                    preEngagementRequired: string;
                    preEngagementItems: import("@prisma/client/runtime/library").JsonValue;
                    projectOverview: string | null;
                    objectives: string | null;
                    healthSafety: string | null;
                    vfmStatement: string | null;
                    vfmDriver1: string | null;
                    vfmDriver2: string | null;
                    vfmDriver3: string | null;
                    projectSuccessCriteria: string | null;
                    socialValue: string | null;
                    tomsRows: import("@prisma/client/runtime/library").JsonValue;
                    s61: string | null;
                    s62: string | null;
                    s63: string | null;
                    s65: string | null;
                    s66: string | null;
                    s70: string | null;
                    s90: string | null;
                    s100: string | null;
                    s110: string | null;
                    s120: string | null;
                    s130: string | null;
                    s140: string | null;
                    s150: string | null;
                    nonCoreServices: import("@prisma/client/runtime/library").JsonValue;
                    scopeSelections: import("@prisma/client/runtime/library").JsonValue;
                    uploadOwnProgramme: string;
                    deliveryRows: import("@prisma/client/runtime/library").JsonValue;
                    selectedContractDesc: string | null;
                    srpDeliveryMethod: string | null;
                    commercialLead: string | null;
                    approvalComments: string | null;
                    approvedAt: Date | null;
                    approvedBy: string | null;
                    sentForApprovalAt: Date | null;
                })[];
            };
            overdueInvoices: {
                count: number;
                items: ({
                    schedule: {
                        opportunity: {
                            clientName: string;
                            commNum: string;
                        };
                    } & {
                        id: string;
                        createdAt: Date;
                        sortOrder: number;
                        opportunityId: string;
                        milestone: string;
                        dueDate: Date;
                    };
                } & {
                    id: string;
                    status: import(".prisma/client").$Enums.InvoiceStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    invoiceRef: string;
                    invoiceScheduleId: string;
                    netAmount: import("@prisma/client/runtime/library").Decimal;
                    vatRate: import("@prisma/client/runtime/library").Decimal;
                    vatAmount: import("@prisma/client/runtime/library").Decimal;
                    totalAmount: import("@prisma/client/runtime/library").Decimal;
                    issuedAt: Date | null;
                    paidAt: Date | null;
                    paymentTerms: number;
                    notes: string | null;
                })[];
            };
            openCEs: {
                count: number;
                items: ({
                    opportunity: {
                        clientName: string;
                        commNum: string;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    description: string;
                    opportunityId: string;
                    metadata: import("@prisma/client/runtime/library").JsonValue;
                    value: import("@prisma/client/runtime/library").Decimal;
                    ceRef: string;
                    stage: import(".prisma/client").$Enums.CeStage;
                    raisedAt: Date;
                    raisedBy: string | null;
                })[];
            };
            pendingPIs: {
                count: number;
                items: ({
                    opportunity: {
                        name: string;
                        commNum: string;
                        lead: {
                            name: string;
                        };
                    };
                } & {
                    id: string;
                    status: string;
                    createdAt: Date;
                    updatedAt: Date;
                    version: number;
                    opportunityId: string;
                    metadata: import("@prisma/client/runtime/library").JsonValue;
                    approvedAt: Date | null;
                    approver: string | null;
                })[];
            };
            expiringDelegations: {
                count: number;
                items: ({
                    fromUser: {
                        name: string;
                    };
                    toUser: {
                        name: string;
                    };
                } & {
                    id: string;
                    status: import(".prisma/client").$Enums.DelegationStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    type: import(".prisma/client").$Enums.DelegationType;
                    fromUserId: string;
                    toUserId: string;
                    scope: string;
                    approvalLimit: import("@prisma/client/runtime/library").Decimal | null;
                    startDate: Date;
                    endDate: Date;
                    createdById: string;
                    revokedAt: Date | null;
                })[];
            };
        };
    }>;
    calendarEvents(from: string, to: string): Promise<any[]>;
    aiInsights(type: string): Promise<{
        insights: {
            id: string;
            category: string;
            severity: string;
            title: string;
            summary: string;
            metric: number;
            metricLabel: string;
            trend: string;
            recommendation: string;
        }[];
        generatedAt: string;
    }>;
    getScheduledReports(): Promise<({
        id: string;
        name: string;
        reportType: string;
        frequency: string;
        dayOfWeek: number;
        time: string;
        enabled: boolean;
        lastRun: string;
        nextRun: string;
        deliveryMethod: string;
        recipients: string;
        status: string;
        dayOfMonth?: undefined;
    } | {
        id: string;
        name: string;
        reportType: string;
        frequency: string;
        dayOfMonth: number;
        time: string;
        enabled: boolean;
        lastRun: string;
        nextRun: string;
        deliveryMethod: string;
        recipients: string;
        status: string;
        dayOfWeek?: undefined;
    } | {
        id: string;
        name: string;
        reportType: string;
        frequency: string;
        time: string;
        enabled: boolean;
        lastRun: any;
        nextRun: any;
        deliveryMethod: string;
        recipients: any;
        status: string;
        dayOfWeek?: undefined;
        dayOfMonth?: undefined;
    })[]>;
    private groupBy;
    private groupByField;
}
export declare class ReportingController {
    private readonly svc;
    constructor(svc: ReportingService);
    pipeline(q: any): Promise<{
        kpis: {
            totalCommissions: number;
            totalPipeline: number;
            contracted: number;
            completed: number;
            avgValue: number;
        };
        byStatus: {
            status: any;
            count: number;
            value: number;
        }[];
        bySector: {
            name: any;
            count: number;
            value: number;
        }[];
        byRegion: {
            name: any;
            count: number;
            value: number;
        }[];
        rows: ({
            lead: {
                name: string;
            };
        } & {
            id: string;
            name: string;
            status: import(".prisma/client").$Enums.OppStatus;
            region: string | null;
            createdAt: Date;
            updatedAt: Date;
            clientName: string;
            value: import("@prisma/client/runtime/library").Decimal;
            commNum: string;
            stagePercent: number;
            leadId: string | null;
            sector: string | null;
            services: string[];
            srpStatus: import(".prisma/client").$Enums.SrpStatus;
        })[];
    }>;
    ce(q: any): Promise<{
        kpis: {
            total: number;
            totalValue: number;
            approved: number;
            open: number;
        };
        byStage: {
            stage: any;
            count: number;
            value: number;
        }[];
        rows: ({
            opportunity: {
                clientName: string;
                commNum: string;
                lead: {
                    name: string;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            opportunityId: string;
            metadata: import("@prisma/client/runtime/library").JsonValue;
            value: import("@prisma/client/runtime/library").Decimal;
            ceRef: string;
            stage: import(".prisma/client").$Enums.CeStage;
            raisedAt: Date;
            raisedBy: string | null;
        })[];
    }>;
    srp(q: any): Promise<{
        kpis: {
            total: number;
            approved: number;
            pending: number;
            overdue: number;
            draft: number;
        };
        byStatus: {
            status: string;
            count: number;
        }[];
        overdue: {
            daysPending: number;
            opportunity: {
                name: string;
                clientName: string;
                commNum: string;
                lead: {
                    name: string;
                };
            };
            id: string;
            status: import(".prisma/client").$Enums.SrpStatus;
            createdAt: Date;
            updatedAt: Date;
            startDate: Date | null;
            endDate: Date | null;
            opportunityId: string;
            clientContactName: string | null;
            clientContactEmail: string | null;
            clientContactTel: string | null;
            clientContactPosition: string | null;
            commissionLead: string | null;
            commissionLeadEmail: string | null;
            commissionLeadMobile: string | null;
            serviceManager: string | null;
            commissionDesc: string | null;
            commissionPostCode: string | null;
            mainContractType: string | null;
            confidentialityFlag: string;
            hasProgramme: string;
            hasProjectBrief: string;
            hasSchemeLayout: string;
            preEngagementRequired: string;
            preEngagementItems: import("@prisma/client/runtime/library").JsonValue;
            projectOverview: string | null;
            objectives: string | null;
            healthSafety: string | null;
            vfmStatement: string | null;
            vfmDriver1: string | null;
            vfmDriver2: string | null;
            vfmDriver3: string | null;
            projectSuccessCriteria: string | null;
            socialValue: string | null;
            tomsRows: import("@prisma/client/runtime/library").JsonValue;
            s61: string | null;
            s62: string | null;
            s63: string | null;
            s65: string | null;
            s66: string | null;
            s70: string | null;
            s90: string | null;
            s100: string | null;
            s110: string | null;
            s120: string | null;
            s130: string | null;
            s140: string | null;
            s150: string | null;
            nonCoreServices: import("@prisma/client/runtime/library").JsonValue;
            scopeSelections: import("@prisma/client/runtime/library").JsonValue;
            uploadOwnProgramme: string;
            deliveryRows: import("@prisma/client/runtime/library").JsonValue;
            selectedContractDesc: string | null;
            srpDeliveryMethod: string | null;
            commercialLead: string | null;
            approvalComments: string | null;
            approvedAt: Date | null;
            approvedBy: string | null;
            sentForApprovalAt: Date | null;
        }[];
        rows: ({
            opportunity: {
                name: string;
                clientName: string;
                commNum: string;
                lead: {
                    name: string;
                };
            };
        } & {
            id: string;
            status: import(".prisma/client").$Enums.SrpStatus;
            createdAt: Date;
            updatedAt: Date;
            startDate: Date | null;
            endDate: Date | null;
            opportunityId: string;
            clientContactName: string | null;
            clientContactEmail: string | null;
            clientContactTel: string | null;
            clientContactPosition: string | null;
            commissionLead: string | null;
            commissionLeadEmail: string | null;
            commissionLeadMobile: string | null;
            serviceManager: string | null;
            commissionDesc: string | null;
            commissionPostCode: string | null;
            mainContractType: string | null;
            confidentialityFlag: string;
            hasProgramme: string;
            hasProjectBrief: string;
            hasSchemeLayout: string;
            preEngagementRequired: string;
            preEngagementItems: import("@prisma/client/runtime/library").JsonValue;
            projectOverview: string | null;
            objectives: string | null;
            healthSafety: string | null;
            vfmStatement: string | null;
            vfmDriver1: string | null;
            vfmDriver2: string | null;
            vfmDriver3: string | null;
            projectSuccessCriteria: string | null;
            socialValue: string | null;
            tomsRows: import("@prisma/client/runtime/library").JsonValue;
            s61: string | null;
            s62: string | null;
            s63: string | null;
            s65: string | null;
            s66: string | null;
            s70: string | null;
            s90: string | null;
            s100: string | null;
            s110: string | null;
            s120: string | null;
            s130: string | null;
            s140: string | null;
            s150: string | null;
            nonCoreServices: import("@prisma/client/runtime/library").JsonValue;
            scopeSelections: import("@prisma/client/runtime/library").JsonValue;
            uploadOwnProgramme: string;
            deliveryRows: import("@prisma/client/runtime/library").JsonValue;
            selectedContractDesc: string | null;
            srpDeliveryMethod: string | null;
            commercialLead: string | null;
            approvalComments: string | null;
            approvedAt: Date | null;
            approvedBy: string | null;
            sentForApprovalAt: Date | null;
        })[];
    }>;
    invoices(q: any): Promise<{
        kpis: {
            totalOutstanding: number;
            totalPaid: number;
            overdue: number;
            totalInvoices: number;
        };
        ageing: {
            label: string;
            count: number;
            value: number;
        }[];
        rows: ({
            schedule: {
                opportunity: {
                    clientName: string;
                    commNum: string;
                };
            } & {
                id: string;
                createdAt: Date;
                sortOrder: number;
                opportunityId: string;
                milestone: string;
                dueDate: Date;
            };
        } & {
            id: string;
            status: import(".prisma/client").$Enums.InvoiceStatus;
            createdAt: Date;
            updatedAt: Date;
            invoiceRef: string;
            invoiceScheduleId: string;
            netAmount: import("@prisma/client/runtime/library").Decimal;
            vatRate: import("@prisma/client/runtime/library").Decimal;
            vatAmount: import("@prisma/client/runtime/library").Decimal;
            totalAmount: import("@prisma/client/runtime/library").Decimal;
            issuedAt: Date | null;
            paidAt: Date | null;
            paymentTerms: number;
            notes: string | null;
        })[];
    }>;
    fees(q: any): Promise<{
        kpis: {
            totalForecast: number;
            totalConstruction: number;
            avgMargin: number;
            commissions: number;
        };
        byProcRoute: {
            name: string;
            count: number;
        }[];
        rows: ({
            opportunity: {
                name: string;
                status: import(".prisma/client").$Enums.OppStatus;
                clientName: string;
                value: import("@prisma/client/runtime/library").Decimal;
                commNum: string;
                lead: {
                    name: string;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            opportunityId: string;
            nonCoreServices: import("@prisma/client/runtime/library").JsonValue;
            inputDate: Date | null;
            constructionValue: import("@prisma/client/runtime/library").Decimal;
            preContractWeeks: number;
            postContractWeeks: number;
            procRoute: string;
            overridePscPct: import("@prisma/client/runtime/library").Decimal;
            contractLead: string | null;
            supervisor: string | null;
            bim: string;
            nec3OptionG: boolean;
            necContractForm: string | null;
            necOption: string | null;
            inflationRequired: string;
            inflationApplied: string;
            selectedServices: import("@prisma/client/runtime/library").JsonValue;
            secondaryServices: import("@prisma/client/runtime/library").JsonValue;
            timeCharges: import("@prisma/client/runtime/library").JsonValue;
            nonSfr: import("@prisma/client/runtime/library").JsonValue;
            disbursements: import("@prisma/client/runtime/library").JsonValue;
            ceList: import("@prisma/client/runtime/library").JsonValue;
            nextCeNum: number;
            totalPrimeCore: import("@prisma/client/runtime/library").Decimal;
            totalCore: import("@prisma/client/runtime/library").Decimal;
            totalTimeCharges: import("@prisma/client/runtime/library").Decimal;
            totalExtConsultancy: import("@prisma/client/runtime/library").Decimal;
            totalDisbursements: import("@prisma/client/runtime/library").Decimal;
            pscFee: import("@prisma/client/runtime/library").Decimal;
            grandTotal: import("@prisma/client/runtime/library").Decimal;
        })[];
    }>;
    activity(q: any): Promise<{
        data: ({
            user: {
                name: string;
                initials: string;
                avatarColor: string;
            };
        } & {
            id: string;
            createdAt: Date;
            description: string;
            isSystem: boolean;
            userId: string | null;
            action: import(".prisma/client").$Enums.AuditAction;
            entityType: string;
            entityId: string | null;
            isProxy: boolean;
            beforeVal: import("@prisma/client/runtime/library").JsonValue | null;
            afterVal: import("@prisma/client/runtime/library").JsonValue | null;
            comments: string | null;
            ipAddress: string | null;
            userAgent: string | null;
            opportunityId: string | null;
            proxyUserId: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            pageSize: number;
            pages: number;
        };
    }>;
    pending(q: any): Promise<{
        total: number;
        sections: {
            srpApprovals: {
                count: number;
                items: ({
                    opportunity: {
                        name: string;
                        clientName: string;
                        commNum: string;
                        lead: {
                            name: string;
                        };
                    };
                } & {
                    id: string;
                    status: import(".prisma/client").$Enums.SrpStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    startDate: Date | null;
                    endDate: Date | null;
                    opportunityId: string;
                    clientContactName: string | null;
                    clientContactEmail: string | null;
                    clientContactTel: string | null;
                    clientContactPosition: string | null;
                    commissionLead: string | null;
                    commissionLeadEmail: string | null;
                    commissionLeadMobile: string | null;
                    serviceManager: string | null;
                    commissionDesc: string | null;
                    commissionPostCode: string | null;
                    mainContractType: string | null;
                    confidentialityFlag: string;
                    hasProgramme: string;
                    hasProjectBrief: string;
                    hasSchemeLayout: string;
                    preEngagementRequired: string;
                    preEngagementItems: import("@prisma/client/runtime/library").JsonValue;
                    projectOverview: string | null;
                    objectives: string | null;
                    healthSafety: string | null;
                    vfmStatement: string | null;
                    vfmDriver1: string | null;
                    vfmDriver2: string | null;
                    vfmDriver3: string | null;
                    projectSuccessCriteria: string | null;
                    socialValue: string | null;
                    tomsRows: import("@prisma/client/runtime/library").JsonValue;
                    s61: string | null;
                    s62: string | null;
                    s63: string | null;
                    s65: string | null;
                    s66: string | null;
                    s70: string | null;
                    s90: string | null;
                    s100: string | null;
                    s110: string | null;
                    s120: string | null;
                    s130: string | null;
                    s140: string | null;
                    s150: string | null;
                    nonCoreServices: import("@prisma/client/runtime/library").JsonValue;
                    scopeSelections: import("@prisma/client/runtime/library").JsonValue;
                    uploadOwnProgramme: string;
                    deliveryRows: import("@prisma/client/runtime/library").JsonValue;
                    selectedContractDesc: string | null;
                    srpDeliveryMethod: string | null;
                    commercialLead: string | null;
                    approvalComments: string | null;
                    approvedAt: Date | null;
                    approvedBy: string | null;
                    sentForApprovalAt: Date | null;
                })[];
            };
            overdueInvoices: {
                count: number;
                items: ({
                    schedule: {
                        opportunity: {
                            clientName: string;
                            commNum: string;
                        };
                    } & {
                        id: string;
                        createdAt: Date;
                        sortOrder: number;
                        opportunityId: string;
                        milestone: string;
                        dueDate: Date;
                    };
                } & {
                    id: string;
                    status: import(".prisma/client").$Enums.InvoiceStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    invoiceRef: string;
                    invoiceScheduleId: string;
                    netAmount: import("@prisma/client/runtime/library").Decimal;
                    vatRate: import("@prisma/client/runtime/library").Decimal;
                    vatAmount: import("@prisma/client/runtime/library").Decimal;
                    totalAmount: import("@prisma/client/runtime/library").Decimal;
                    issuedAt: Date | null;
                    paidAt: Date | null;
                    paymentTerms: number;
                    notes: string | null;
                })[];
            };
            openCEs: {
                count: number;
                items: ({
                    opportunity: {
                        clientName: string;
                        commNum: string;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    description: string;
                    opportunityId: string;
                    metadata: import("@prisma/client/runtime/library").JsonValue;
                    value: import("@prisma/client/runtime/library").Decimal;
                    ceRef: string;
                    stage: import(".prisma/client").$Enums.CeStage;
                    raisedAt: Date;
                    raisedBy: string | null;
                })[];
            };
            pendingPIs: {
                count: number;
                items: ({
                    opportunity: {
                        name: string;
                        commNum: string;
                        lead: {
                            name: string;
                        };
                    };
                } & {
                    id: string;
                    status: string;
                    createdAt: Date;
                    updatedAt: Date;
                    version: number;
                    opportunityId: string;
                    metadata: import("@prisma/client/runtime/library").JsonValue;
                    approvedAt: Date | null;
                    approver: string | null;
                })[];
            };
            expiringDelegations: {
                count: number;
                items: ({
                    fromUser: {
                        name: string;
                    };
                    toUser: {
                        name: string;
                    };
                } & {
                    id: string;
                    status: import(".prisma/client").$Enums.DelegationStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    type: import(".prisma/client").$Enums.DelegationType;
                    fromUserId: string;
                    toUserId: string;
                    scope: string;
                    approvalLimit: import("@prisma/client/runtime/library").Decimal | null;
                    startDate: Date;
                    endDate: Date;
                    createdById: string;
                    revokedAt: Date | null;
                })[];
            };
        };
    }>;
    calendar(from: string, to: string): Promise<any[]>;
    aiInsights(type: string): Promise<{
        insights: {
            id: string;
            category: string;
            severity: string;
            title: string;
            summary: string;
            metric: number;
            metricLabel: string;
            trend: string;
            recommendation: string;
        }[];
        generatedAt: string;
    }>;
    scheduled(): Promise<({
        id: string;
        name: string;
        reportType: string;
        frequency: string;
        dayOfWeek: number;
        time: string;
        enabled: boolean;
        lastRun: string;
        nextRun: string;
        deliveryMethod: string;
        recipients: string;
        status: string;
        dayOfMonth?: undefined;
    } | {
        id: string;
        name: string;
        reportType: string;
        frequency: string;
        dayOfMonth: number;
        time: string;
        enabled: boolean;
        lastRun: string;
        nextRun: string;
        deliveryMethod: string;
        recipients: string;
        status: string;
        dayOfWeek?: undefined;
    } | {
        id: string;
        name: string;
        reportType: string;
        frequency: string;
        time: string;
        enabled: boolean;
        lastRun: any;
        nextRun: any;
        deliveryMethod: string;
        recipients: any;
        status: string;
        dayOfWeek?: undefined;
        dayOfMonth?: undefined;
    })[]>;
}
export declare class ReportingModule {
}
