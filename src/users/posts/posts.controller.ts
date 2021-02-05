import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  Authentication,
  AuthenticationGuard,
  AuthenticationParams,
} from 'src/guard/authentication.guard';
import { AuthenticationService } from 'src/lib/auth/authentication/authentication.service';

@Controller('users/:userID/posts')
export class PostsController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Get()
  findAll(@Param('userID') userID: string) {
    return userID;
  }

  @Post()
  @UseGuards(AuthenticationGuard)
  create(@Authentication() authUser: AuthenticationParams) {
    return {
      userID: authUser?.userID,
    };
  }
}
