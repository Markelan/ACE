import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    login: string;
    @ApiProperty()
    @MinLength(6)
    password: string;
  }