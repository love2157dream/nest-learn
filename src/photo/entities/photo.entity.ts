import { Metadata } from "../../metadata/entities/metadata.entity";
import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Metadata, metadata => metadata.photo)
  metadata: Metadata;

  @ManyToMany(() => User, (user) => user.photos)
  users: User[];
}
