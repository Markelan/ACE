import { BadRequestException, Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon2 from 'argon2'


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ userId: id });
  }

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.usersRepository.findOne({
      where: {
        login: createUserDto.login,
      }
    })
    if(existUser) throw new BadRequestException('this login is taken')
    const user = await this.usersRepository.save({
      login: createUserDto.login,
      password: await argon2.hash(createUserDto.password)
    })
    return {user}
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
