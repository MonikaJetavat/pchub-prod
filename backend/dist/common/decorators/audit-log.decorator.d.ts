export declare const AUDIT_LOG_KEY = "audit_log";
export declare const AuditLog: (opts: {
    action: string;
    entityType: string;
}) => import("@nestjs/common").CustomDecorator<string>;
