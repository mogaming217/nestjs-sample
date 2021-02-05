import { Controller, Get, Param } from '@nestjs/common';

@Controller('users/:userID/posts')
export class PostsController {
  @Get()
  findAll(@Param('userID') userID: string) {
    return userID;
  }
}
