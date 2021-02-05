import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticationService } from 'src/lib/auth/authentication/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly authenticationService: AuthenticationService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const authHeader = req.headers.authorization;
    // TODO: tokenの取り出しやエラーハンドリング
    if (authHeader) {
      console.log('verify');
      await this.authenticationService.verify(authHeader);
    } else {
      console.log('not to verify');
    }
    return true;
  }
}
