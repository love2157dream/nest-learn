import { Injectable } from '@nestjs/common';
import { CreateMetadataDto } from './dto/create-metadata.dto';
import { UpdateMetadataDto } from './dto/update-metadata.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Metadata } from './entities/metadata.entity';
import { Repository } from 'typeorm';
import { Photo } from 'src/photo/entities/photo.entity';

@Injectable()
export class MetadataService {

  constructor(
    @InjectRepository(Metadata) private metadataRepository: Repository<Metadata>,
    @InjectRepository(Photo) private photoRepository: Repository<Photo>,
  ){}


  async create(createMetadataDto: CreateMetadataDto) {
    return await this.metadataRepository.save(createMetadataDto);
  }

  async addMetadata(params: { photoId: number}) {
    // 构造photo, 如果没有传photoId,就随机生成一个; 传photoId，查询下获取数据
    let photo: Photo = null;
    if (params.photoId) {
      photo = await this.photoRepository.findOne({where: { id: params.photoId }});
    } else {
      photo = new Photo();
      photo.name = `${Math.random().toString(16).substring(2,8)}.jpg`;
      // 先保存photo
      await this.photoRepository.save(photo);
    }
    console.log('photo',photo);
    let metadata = new Metadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.orientation = "portait";
    metadata.photo = photo; // 联接两者
    // 然后保存photo的metadata
    return this.metadataRepository.save(metadata);
  }

  async findAll() {
    return await this.metadataRepository.createQueryBuilder().getMany();
  }

  async findOne(id: number) {
    return await this.metadataRepository.findOne({ where: { 'id': id }});
  }

  async update(id: number, updateMetadataDto: UpdateMetadataDto) {
    return await this.metadataRepository.update(id, updateMetadataDto);
  }

  async remove(id: number) {
    return await this.metadataRepository.delete(id);
  }
}
