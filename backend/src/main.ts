import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import compression from 'compression';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['error','warn','log'] });
  const cfg = app.get(ConfigService);

  app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc:["'self'"], scriptSrc:["'self'"], styleSrc:["'self'","'unsafe-inline'"], imgSrc:["'self'","data:","blob:"] } } }));
  app.use(compression());
  app.enableCors({ origin: cfg.get('CORS_ORIGINS','http://localhost:4200').split(','), credentials:true, methods:['GET','POST','PUT','PATCH','DELETE','OPTIONS'], allowedHeaders:['Content-Type','Authorization','X-Proxy-User-Id'] });
  app.enableVersioning({ type: VersioningType.URI });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist:true, transform:true, forbidNonWhitelisted:true, transformOptions:{ enableImplicitConversion:true } }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor(), new TransformInterceptor());

  if (cfg.get('NODE_ENV') !== 'production') {
    const doc = new DocumentBuilder().setTitle('PC HUB 2.0 API').setDescription('Enterprise commission management').setVersion('2.0').addBearerAuth().build();
    SwaggerModule.setup('api/docs', app, SwaggerModule.createDocument(app, doc));
  }

  const port = cfg.get<number>('PORT', 3000);
  await app.listen(port);
  console.log(`PC HUB 2.0 API → http://localhost:${port}/api`);
}
bootstrap();
