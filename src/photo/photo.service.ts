import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { Repository } from 'typeorm';
import { Metadata } from '../metadata/entities/metadata.entity';

@Injectable()
export class PhotoService {

  constructor(
    @InjectRepository(Photo) private photoRepository: Repository<Photo>,
    @InjectRepository(Metadata) private metadataRepository: Repository<Metadata>,
  ) {}

  async create(createPhotoDto: CreatePhotoDto) {
    let metadata = new Metadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.orientation = "portait";

    createPhotoDto.metadata = metadata;
    return await this.photoRepository.save(createPhotoDto);
  }

  async findAll() {
    return await this.photoRepository.createQueryBuilder('photo').innerJoinAndSelect('photo.metadata','metadata').getMany();
  }

  async findOne(id: number) {
    return await this.photoRepository.findOne({ where: { 'id': id}});
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return await this.photoRepository.update(id, updatePhotoDto);
  }

  async remove(id: number) {
    return await this.photoRepository.delete(id);
  }
}
