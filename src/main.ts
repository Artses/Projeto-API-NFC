import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())
  app.enableCors({
    origin: "https://localhost:7218",
    credentials:true
  })

  const config = new DocumentBuilder()
    .setTitle('Chamada NFC')
    .setDescription('Uma API de chamadas via NFC')
    .setVersion('1.0')
    .addTag('Chamada')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Swagger', app, document);

  await app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
  });
}
bootstrap();
