import {
  CanActivate,
  createParamDecorator,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthenticationService } from 'src/lib/auth/authentication/authentication.service';
import { AuthUser } from 'src/lib/auth/authentication/authentication.service';

export type AuthenticationParams = AuthUser | undefined;

export const Authentication = createParamDecorator(
  (_, context: ExecutionContext): AuthenticationParams => {
    const req = context.switchToHttp().getRequest();
    return req.authInfo;
  },
);

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly authenticationService: AuthenticationService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const authHeader = req.headers.authorization;
    // TODO: tokenの取り出しやエラーハンドリング
    if (authHeader) {
      const result = await this.authenticationService.verify(authHeader);
      (req as any).authInfo = result;
    } else {
      console.log('not to verify');
    }
    return true;
  }
}
