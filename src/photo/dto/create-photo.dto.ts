import { Metadata } from "../../metadata/entities/metadata.entity";

export class CreatePhotoDto {
  name: string;
  metadata: Metadata;
}
