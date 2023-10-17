import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = 1417;
  const app = await NestFactory.create(AppModule);
  const logger: Logger = new Logger();
  await app.listen(PORT, () => {
    logger.log(`服务已经启动，接口请访问http://localhost:${PORT}`);
  });
}
bootstrap();
