import { Racket } from 'src/rackets/rackets.entity';
import { User } from 'src/users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column()
  value: number;

  @ManyToOne((type) => User, (user) => user.order)
  @JoinColumn({
    name: 'userId',
  })
  user: User;

  @Column({ nullable: false })
  userId: number;

  @ManyToOne((type) => Racket, (racket) => racket.order)
  @JoinColumn({name: 'racketId',})
  racket: Racket;

  @Column({ nullable: false })
  racketId: number;
}
