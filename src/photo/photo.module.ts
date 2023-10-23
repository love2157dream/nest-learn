import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { Photo } from './entities/photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metadata } from '../metadata/entities/metadata.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photo, Metadata])
  ],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
