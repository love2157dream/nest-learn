import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {

  constructor(
    @InjectRepository(Photo) private photoRepository: Repository<Photo>
  ) {}

  async create(createPhotoDto: CreatePhotoDto) {
    return await this.photoRepository.save(createPhotoDto);
  }

  async findAll() {
    return await this.photoRepository.createQueryBuilder().getMany();
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
