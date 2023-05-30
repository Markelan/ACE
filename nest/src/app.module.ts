import { Module } from '@nestjs/common';
import { RacketsModule } from './rackets/rackets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Racket } from './rackets/rackets.entity';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './order/orders.module';
import { Order } from './order/orders.entity';

@Module({
  imports: [
    UsersModule,
    RacketsModule,
    OrdersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ace',
      entities: [Racket, User, Order],
      synchronize: true,
      migrations: [],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
