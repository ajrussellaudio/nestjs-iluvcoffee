import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'All the coffees!';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Found coffee ID #${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
