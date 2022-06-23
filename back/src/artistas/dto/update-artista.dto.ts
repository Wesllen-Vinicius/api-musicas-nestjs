import { IsNotEmpty, IsString } from 'class-validator';

export class UptadeArtista {
  @IsString()
  @IsNotEmpty()
  f_name: string;

  @IsString()
  @IsNotEmpty()
  l_name: string;
}
