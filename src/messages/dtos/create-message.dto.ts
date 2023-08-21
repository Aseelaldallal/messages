import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString() // when we create a instance of createMessageDto, we make sure
  // that the content property is actually a string
  content: string;
}