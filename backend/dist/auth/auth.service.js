"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async getUserFromToken(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                roles: {
                    include: { role: { select: { name: true, permissions: true } } },
                },
            },
        });
        if (!user || user.status !== 'Active') {
            throw new common_1.UnauthorizedException('User account is inactive or not found');
        }
        const permissions = user.roles.reduce((acc, ur) => {
            const p = ur.role.permissions;
            if (p.all)
                return { ...acc, all: ['*'] };
            Object.entries(p).forEach(([mod, perms]) => {
                if (!acc[mod])
                    acc[mod] = [];
                if (Array.isArray(perms))
                    acc[mod].push(...perms);
            });
            return acc;
        }, {});
        return { ...user, permissions };
    }
    hasPermission(user, permission) {
        if (!user?.permissions)
            return false;
        if (user.permissions.all)
            return true;
        const [mod, action] = permission.split(':');
        return user.permissions[mod]?.includes(action) ?? false;
    }
    generateToken(userId) {
        return this.jwt.sign({ sub: userId });
    }
    generateDevToken(userId) {
        if (this.config.get('NODE_ENV') === 'production') {
            throw new common_1.UnauthorizedException('Dev tokens not available in production');
        }
        return this.jwt.sign({ sub: userId, type: 'dev' });
    }
    async validateProxy(fromUserId, toUserId) {
        return this.prisma.delegation.findFirst({
            where: {
                fromUserId,
                toUserId,
                status: 'Active',
                startDate: { lte: new Date() },
                endDate: { gte: new Date() },
            },
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map