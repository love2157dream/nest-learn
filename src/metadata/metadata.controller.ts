import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetadataService } from './metadata.service';
import { CreateMetadataDto } from './dto/create-metadata.dto';
import { UpdateMetadataDto } from './dto/update-metadata.dto';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Post('add')
  create(@Body() createMetadataDto: CreateMetadataDto) {
    return this.metadataService.create(createMetadataDto);
  }

  @Post('addMetadata')
  addMetadata(@Body() params: {photoId: number}) {
    return this.metadataService.addMetadata(params);
  }

  @Get('list')
  findAll() {
    return this.metadataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metadataService.findOne(+id);
  }

  @Post('update/:id')
  update(@Param('id') id: string, @Body() updateMetadataDto: UpdateMetadataDto) {
    return this.metadataService.update(+id, updateMetadataDto);
  }

  @Get('delte/:id')
  remove(@Param('id') id: string) {
    return this.metadataService.remove(+id);
  }
}
