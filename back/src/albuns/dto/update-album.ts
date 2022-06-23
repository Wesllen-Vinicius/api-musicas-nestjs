import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAlbum {
  @IsString()
  @IsNotEmpty()
  nome_album: string;
}
