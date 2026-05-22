import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly svc;
    constructor(svc: AuthService);
    getMe(user: any): any;
    devToken(userId: string): {
        token: string;
        note: string;
    };
}
