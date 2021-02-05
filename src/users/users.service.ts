import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.interface';

@Injectable()
export class UsersService {
  async findAll(): Promise<User[]> {
    return [
      {
        id: 'aaa',
      },
    ];
  }
}
