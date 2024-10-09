import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Chamada NFC')
    .setDescription('Uma API de chamadas via NFC')
    .setVersion('1.0')
    .addTag('Chamada')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Swagger', app, document);

  await app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
  });
}
bootstrap();
