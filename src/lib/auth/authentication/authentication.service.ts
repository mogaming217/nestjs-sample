import { Injectable } from '@nestjs/common';

export interface AuthUser {
  userID: string;
}

@Injectable()
export class AuthenticationService {
  async verify(token?: string): Promise<AuthUser | null> {
    if (!token) return null;
    return { userID: token };
  }
}
