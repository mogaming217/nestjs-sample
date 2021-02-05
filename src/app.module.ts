import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthenticationService } from './lib/auth/authentication/authentication.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {}
