import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { response } from 'express';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}
  @Get()
  findAll(@Query() pageiationQuery) {
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(typeof id);
    return this.coffeeService.findOne(''+id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    //return body;
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeeService.create(CreateCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCoffeeDto) {
    return this.coffeeService.update(id, UpdateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //return `This action remove ${id} coffee`;
    return this.coffeeService.remove(id);
  }
}
