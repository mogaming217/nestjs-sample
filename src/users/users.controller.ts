import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  async create(@Body() name: string) {
    return this.service.create(name);
  }

  @Post(':userID')
  async update(@Param('userID') id: string, @Body('name') name: string) {
    return this.service.update(parseInt(id), name);
  }
}
