import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty } from 'class-validator';

export class BaseDto {
  @IsEmpty()
  @ApiProperty()
  id: string;
}
