import { Body, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { RacketsService } from 'src/rackets/rackets.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  findAll() {
    return this.ordersRepository.find();
  }

  findOne(id: number) {
    return this.ordersRepository.findOneBy({ orderId: id });
  }

  create(createOrderDto: CreateOrderDto) {
    const order = new Order();
    order.value = createOrderDto.value;
    order.userId = createOrderDto.userId;
    order.racketId = createOrderDto.racketId;
    return this.ordersRepository.save(order);
  }

  async remove(id: number) {
    await this.ordersRepository.delete(id);
  }
}
