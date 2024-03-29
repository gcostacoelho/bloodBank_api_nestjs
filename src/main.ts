import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Blood Bank')
    .setDescription('The Blood Bank API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Authorization')
    .addTag('Doador')
    .addTag('Blood Bank')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();