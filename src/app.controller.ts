import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  get(@Param('id') id: string, @Query('q') q?: string): string {
    return this.appService.getHello(id + q);
  }
}
