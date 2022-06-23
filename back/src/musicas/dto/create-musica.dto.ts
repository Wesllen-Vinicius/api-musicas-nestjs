import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateMusica {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsOptional()
  @IsNumber()
  albumId: number;

  @IsNotEmpty()
  @IsNumber()
  artistaId: number;
}
