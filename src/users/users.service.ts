import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      take: 30,
    });
  }

  async create(name: string) {
    return this.prisma.user.create({
      data: {
        name,
      },
    });
  }

  async update(userID: number, name: string) {
    return this.prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        name,
      },
    });
  }
}
