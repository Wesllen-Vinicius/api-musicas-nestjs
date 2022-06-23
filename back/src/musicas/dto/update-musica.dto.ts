import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateMusica {
  @IsString()
  @IsNotEmpty()
  titulo: string;
}
