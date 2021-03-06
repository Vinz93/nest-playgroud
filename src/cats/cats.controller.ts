import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filer';
import { JoiValidationPipe } from '../common/pipes/joi.validation.pipe';
import { AuthGuard } from '../common/guards/auth.guard';
import { createCatSchema } from './cats.schema.validations'

@ApiTags('cats')
@Controller('cats')
@UseGuards(AuthGuard)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
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
