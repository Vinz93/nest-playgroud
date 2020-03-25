import { ApiProperty } from '@nestjs/swagger';
export class CreateCatDto {
  @ApiProperty({
    description: 'the name of your cat',
    default: 'Bruno',
  })
  name: string;

  @ApiProperty(    {
      description: 'The age of a cat',
    type: Number,
      minimum: 1,
      default: 1,
    }
  )
  age: number;

  @ApiProperty()
  breed: string;
}
