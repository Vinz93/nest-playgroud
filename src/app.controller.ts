import { Controller, Get, Post, Req, Body, HttpCode, Param } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

interface PostResponse {
  cars: string,
}

class CreateDto {
  cars: string;
}

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(this);
    return this.appService.getHello();
  }

  @Get(':id')
  getById(@Param('id') paramId): string {
    return paramId;
  }

  @Post('my-path')
  @HttpCode(201)
  createSomething(@Req() request: Request, @Body() body: CreateDto): PostResponse {

    return ({ cars: body.cars });
  }
}
