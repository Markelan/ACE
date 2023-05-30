import { ApiProperty } from "@nestjs/swagger";

export class CreateRacketDto {
  @ApiProperty()
  Name: string;

  @ApiProperty()
  Brand: string;
}