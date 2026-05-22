"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLog = exports.AUDIT_LOG_KEY = exports.CurrentUser = exports.Permissions = exports.PERMISSIONS_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.PERMISSIONS_KEY = 'permissions';
const Permissions = (...perms) => (0, common_1.SetMetadata)(exports.PERMISSIONS_KEY, perms);
exports.Permissions = Permissions;
exports.CurrentUser = (0, common_1.createParamDecorator)((_, ctx) => ctx.switchToHttp().getRequest().user);
exports.AUDIT_LOG_KEY = 'audit_log';
const AuditLog = (opts) => (0, common_1.SetMetadata)(exports.AUDIT_LOG_KEY, opts);
exports.AuditLog = AuditLog;
//# sourceMappingURL=index.js.map