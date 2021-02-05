import { Module } from '@nestjs/common';
import { AuthenticationService } from 'src/lib/auth/authentication/authentication.service';
import { PostsController } from './posts.controller';

@Module({
  controllers: [PostsController],
  providers: [AuthenticationService],
})
export class PostsModule {}
