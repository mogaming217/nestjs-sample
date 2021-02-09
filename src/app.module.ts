import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthenticationService } from './lib/auth/authentication/authentication.service';
import { PrismaService } from './lib/prisma/prisma.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthenticationService, PrismaService],
})
export class AppModule {}
