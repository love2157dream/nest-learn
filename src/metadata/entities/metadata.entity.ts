import { Photo } from "../../photo/entities/photo.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Metadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  height: number;

  @Column()
  width: number;

  @Column()
  compressed: boolean;

  @Column()
  orientation: string;

  @OneToOne(() => Photo, photo => photo.metadata,{
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  photo: Photo;
}
