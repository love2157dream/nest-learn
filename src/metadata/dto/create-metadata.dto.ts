import { Photo } from "../../photo/entities/photo.entity";

export class CreateMetadataDto {
  width: number;
  height: number;
  compressed: boolean;
  orientation: string;
  photo: Photo;
}
