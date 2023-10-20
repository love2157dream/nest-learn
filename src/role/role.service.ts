import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>
  ){}
  
  async create(createRoleDto: CreateRoleDto) {
    return await this.roleRepository.save(createRoleDto);
  }

  async findAll() {
    return this.roleRepository.createQueryBuilder().getMany();
  }

  async findOne(id: number) {
    return await this.roleRepository.createQueryBuilder().where('id=:id', {id: id}).getOne();
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.roleRepository.update(id, updateRoleDto);
  }

  async remove(id: number) {
    return await this.roleRepository.delete(id);
  }
}
