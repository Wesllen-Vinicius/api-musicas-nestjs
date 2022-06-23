import { IsString } from 'class-validator';

export class CreateAlbum {
  @IsString()
  autor: string;

  @IsString()
  nome_album: string;
}
