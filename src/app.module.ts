import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestjs-db',
      synchronize: false,
      logging: true,
      autoLoadEntities: true
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
