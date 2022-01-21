import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exeption.filter';
import { TimeOutInterceptor } from './common/interceptor/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder().setTitle('SuperFlight API').setDescription('Scheduled Flights App').setVersion('1.0.0').build();

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: { 
      filter: true
    }
  });

  await app.listen(process.env.PORT || 4000);
}

bootstrap();