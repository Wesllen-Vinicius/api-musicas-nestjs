import { UpdateUser } from './dto/update-user.dto';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUser } from './dto';
import { UserService } from './users.service';
@Controller('users')
export class UserControler {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() dto: CreateUser) {
    return this.userService.createUser(dto);
  }

  @Get(':userId')
  GetUserById(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUserById(userId);
  }

  @Put(':userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() userData: UpdateUser,
  ) {
    return this.userService.updateUser(userId, userData);
  }

  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deletUser(userId);
  }
}
