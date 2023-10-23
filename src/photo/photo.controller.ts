import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post('add')
  create(@Body() createPhotoDto: CreatePhotoDto) {
    return this.photoService.create(createPhotoDto);
  }

  @Get('list')
  findAll() {
    return this.photoService.findAll();
  }

  @Get('query/:id')
  findOne(@Param('id') id: string) {
    return this.photoService.findOne(+id);
  }

  @Post('update/:id')
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
    return this.photoService.update(+id, updatePhotoDto);
  }

  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.photoService.remove(+id);
  }
}
