import { Injectable, NotFoundException } from '@nestjs/common';
import { DataService } from 'src/prisma/prisma.service';
import { CreateUser, UpdateUser } from './dto';

@Injectable()
export class UserService {
  constructor(private dataService: DataService) {}

  async createUser(user: CreateUser) {
    const userCreate = await this.dataService.user.create({
      data: {
        ...user,
      },
      select: {
        user_name: true,
      },
    });
    return userCreate;
  }

  async getUserById(userId: number) {
    const user = await this.dataService.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        user_name: true,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return user;
  }

  async getUsers() {
    return this.dataService.user.findMany();
  }

  async updateUser(userId: number, users: UpdateUser) {
    const userExist = await this.dataService.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!userExist) {
      throw new NotFoundException('User not found!');
    }
    return this.dataService.user.update({
      where: {
        id: userId,
      },
      data: {
        ...users,
      },
      select: {
        user_name: true,
      },
    });
  }

  async deletUser(userId: number) {
    const userExist = await this.dataService.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!userExist) {
      throw new NotFoundException('User not found!');
    }
    return this.dataService.user.delete({
      where: {
        id: userId,
      },
      select: {
        user_name: true,
      },
    });
  }
}
