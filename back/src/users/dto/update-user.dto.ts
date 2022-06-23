import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUser {
  @IsString()
  @IsOptional()
  user_name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsNumber()
  @IsOptional()
  idade?: number;
}
