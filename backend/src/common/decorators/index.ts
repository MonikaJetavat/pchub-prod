import { SetMetadata, createParamDecorator, ExecutionContext } from '@nestjs/common';

// Permissions decorator
export const PERMISSIONS_KEY = 'permissions';
export const Permissions = (...perms: string[]) => SetMetadata(PERMISSIONS_KEY, perms);

// CurrentUser decorator
export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => ctx.switchToHttp().getRequest().user,
);

// AuditLog decorator
export const AUDIT_LOG_KEY = 'audit_log';
export const AuditLog = (opts: { action: string; entityType: string }) =>
  SetMetadata(AUDIT_LOG_KEY, opts);
