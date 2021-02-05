import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  private _userID: string | null;
  get userID() {
    return this._userID;
  }

  async verify(token: string): Promise<{ userID: string } | undefined> {
    // TODO: verify token
    this._userID = token;
    return { userID: this._userID };
  }
}
