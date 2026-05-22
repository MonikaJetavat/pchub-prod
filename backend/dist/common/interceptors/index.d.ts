import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class TransformInterceptor implements NestInterceptor {
    intercept(_ctx: ExecutionContext, next: CallHandler): Observable<any>;
}
export declare class LoggingInterceptor implements NestInterceptor {
    private readonly logger;
    intercept(ctx: ExecutionContext, next: CallHandler): Observable<any>;
}
