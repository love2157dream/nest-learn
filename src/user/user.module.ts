import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from '../role/entities/role.entity';
import { Photo } from '../photo/entities/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Photo])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
