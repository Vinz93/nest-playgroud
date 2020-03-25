import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters, UsePipes } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filer';
import { JoiValidationPipe } from '../common/pipes/joi.validation.pipe';
import { createCatSchema } from './cats.schema.validations'

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  @UseFilters()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat>  {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // throw new HttpException('Forbidden carajito', HttpStatus.FORBIDDEN);

    return this.catsService.findAll();
  }
}
