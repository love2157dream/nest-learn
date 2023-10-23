import { Module } from '@nestjs/common';
import { MetadataService } from './metadata.service';
import { MetadataController } from './metadata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metadata } from './entities/metadata.entity';
import { Photo } from '../photo/entities/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metadata, Photo])],
  controllers: [MetadataController],
  providers: [MetadataService],
})
export class MetadataModule {}
