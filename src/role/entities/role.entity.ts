import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @ManyToOne(() => User, (user) => user.roles)
  @JoinColumn()
  user: User;
}
