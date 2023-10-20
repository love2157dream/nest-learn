import { Photo } from "../../photo/entities/photo.entity";
import { Role } from "../../role/entities/role.entity";

export class CreateUserDto {
  username: string;
  password: string;
  roles: Role[];
  photos: Photo[];
}
