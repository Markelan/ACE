import { Module } from '@nestjs/common';
import { Racket } from './rackets.entity';
import { RacketsController } from './rackets.controller';
import { RacketsService } from './rackets.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module ({
    controllers: [RacketsController],
    providers: [RacketsService],
    imports: [TypeOrmModule.forFeature([Racket])],
    exports: [TypeOrmModule]
})

export class RacketsModule { };