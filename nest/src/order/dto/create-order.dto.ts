import { Racket } from 'src/rackets/rackets.entity';
import { User } from 'src/users/users.entity';

export class CreateOrderDto {
  value: number;
  userId: number;
  racketId: number;
}
