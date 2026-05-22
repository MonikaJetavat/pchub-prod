import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly auth: AuthService,
    config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET', 'dev-secret-change-in-production'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    const user = await this.auth.getUserFromToken(payload.sub);
    const proxyHeader = req.headers['x-proxy-user-id'] as string;
    if (proxyHeader) {
      const dlg = await this.auth.validateProxy(proxyHeader, user.id);
      if (!dlg) throw new UnauthorizedException('No active delegation for proxy operation');
      (user as any).isProxy = true;
      (user as any).proxyForUserId = proxyHeader;
      (user as any).delegationType = dlg.type;
    }
    return user;
  }
}
