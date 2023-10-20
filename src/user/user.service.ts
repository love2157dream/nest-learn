import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from '../role/entities/role.entity';
import { Photo } from '../photo/entities/photo.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
    @InjectRepository(Photo) private photoRepository: Repository<Photo>
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async newAddUserRole(params: {roles: string[], userId: number}) {
    const userInfo = await this.userRepository.findOne({ where: { id: params.userId } });
    const roleList: Role[] = [];
    params.roles.forEach(async (r: string) => {
      const role = new Role();
      role.name = r;
      role.desc = r;
      role.user = userInfo;
      await this.roleRepository.save(role);
      roleList.push(role);
    });
    userInfo.roles = roleList;
    return await this.userRepository.save(userInfo);
  }

  async newAddUserPhoto(params: { photos: string[], userId: number}) {
    const photoList: Photo[] = [];
    params.photos.forEach((p: string) => {
      const photo = new Photo();
      photo.name = p;
      photoList.push(photo);
    });
    let userInfo: User = null;
    if (params.userId) {
      userInfo = await this.userRepository.findOne({ where: { id: params.userId } });
    } else {
      userInfo = new User();
      userInfo.username = "test-photo-1";
      userInfo.password = "123456";
    }
    console.log('photoList:', photoList);
    userInfo.photos = photoList;
    console.log('userInfo', userInfo);
    return await this.userRepository.save(userInfo);
  }

  async findAll() {
    return await this.userRepository.createQueryBuilder("user").leftJoinAndSelect("user.roles", "role").leftJoinAndSelect("user.photos", "photo").getMany();
  }

  async findOne(id: number) {
    return await this.userRepository.createQueryBuilder().where('id=:id', { id: id }).getOne();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
