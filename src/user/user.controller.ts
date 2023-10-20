import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    return this.userService.create(createUserDto);
  }

  @Post('addUserRole')
  addUserRole(@Body() params: {roles: string[], userId: number}) {
    return this.userService.newAddUserRole(params);
  }

  @Post('addUserPhoto')
  addUserPhoto(@Body() params: {photos: string[], userId: number}) {
    return this.userService.newAddUserPhoto(params);
  }

  @Get('list')
  findAll() {
    return this.userService.findAll();
  }

  @Get('query/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
