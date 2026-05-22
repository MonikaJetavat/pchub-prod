import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly svc: AuthService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile with merged permissions' })
  getMe(@CurrentUser() user: any) {
    // Strip sensitive Prisma internals
    const { roles: _r, ...safe } = user;
    return safe;
  }

  @Post('dev-token/:userId')
  @ApiOperation({ summary: 'DEV ONLY — generate a JWT for testing' })
  devToken(@Param('userId') userId: string) {
    return {
      token: this.svc.generateDevToken(userId),
      note: 'This endpoint is disabled in production (NODE_ENV=production)',
    };
  }
}
