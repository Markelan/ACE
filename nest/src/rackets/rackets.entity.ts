import { Order } from 'src/order/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rackets')
export class Racket {
  @PrimaryGeneratedColumn()
  racketId: number;

  @Column()
  brand: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  racket_image: string;

  @OneToMany(() => Order, (order) => order.racket)
  order: Order[];
}
