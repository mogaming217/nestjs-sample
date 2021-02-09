import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(@Query('q') q?: string): string {
    return this.appService.getHello(q ?? 'none');
  }
}
