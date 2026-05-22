export declare const PERMISSIONS_KEY = "permissions";
export declare const Permissions: (...perms: string[]) => import("@nestjs/common").CustomDecorator<string>;
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
export declare const AUDIT_LOG_KEY = "audit_log";
export declare const AuditLog: (opts: {
    action: string;
    entityType: string;
}) => import("@nestjs/common").CustomDecorator<string>;
