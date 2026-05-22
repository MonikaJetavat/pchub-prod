import { SetMetadata } from '@nestjs/common';
export const AUDIT_LOG_KEY = 'audit_log';
export const AuditLog = (opts: { action: string; entityType: string }) =>
  SetMetadata(AUDIT_LOG_KEY, opts);
