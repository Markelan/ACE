import { Body, HttpStatus, Injectable } from "@nestjs/common";
import { Racket } from "./rackets.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRacketDto } from "./create-racket.dto";
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class RacketsService {
    constructor( 
        @InjectRepository(Racket)
        private racketsRepository: Repository<Racket>
    ) {}

    findAll() {
        return this.racketsRepository.find();
    }

    findOne(id: number) {
        return this.racketsRepository.findOneBy({racketId: id});
    }

    async create(createRacketDto : CreateRacketDto, image: Express.Multer.File) {
        const racket = new Racket();

        const filename = `${new Date().getTime()}-${image.originalname}`;
        const filepath = path.join(__dirname,'..','..','uploads', filename);
        await fs.promises.writeFile(filepath, image.buffer);

        racket.brand = createRacketDto.Brand;
        racket.name = createRacketDto.Name;
        racket.racket_image = filepath;

        await this.racketsRepository.save(racket);

        return racket;
    }

    async remove(id:number) {
        await this.racketsRepository.delete(id);
    }
}