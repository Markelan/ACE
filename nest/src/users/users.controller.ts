import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() CreateUserDto: CreateUserDto){
    return this.usersService.create(CreateUserDto)
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}