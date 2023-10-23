import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PhotoModule } from './photo/photo.module';
import { MetadataModule } from './metadata/metadata.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestjs-db',
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }),
    UserModule,
    RoleModule,
    PhotoModule,
    MetadataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
