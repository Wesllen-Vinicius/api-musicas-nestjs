import { IsOptional, IsString } from 'class-validator';

export class CreateArtista {
  @IsString()
  @IsOptional()
  f_name: string;

  @IsString()
  @IsOptional()
  l_name: string;
}
