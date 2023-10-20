import { Photo } from '../../photo/entities/photo.entity';
import { Role } from '../../role/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Role, (role) => role.user)
  roles: Role[];

  @ManyToMany(() => Photo, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinTable()
  photos: Photo[]
}
