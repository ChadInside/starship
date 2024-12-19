import { IsString } from 'class-validator';

export class InputCommandDto {

  @IsString()
  command: string

}
