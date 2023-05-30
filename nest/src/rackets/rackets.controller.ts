import { RacketsService } from "./rackets.service";
import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors} from "@nestjs/common";
import { CreateRacketDto } from "./create-racket.dto";
import { ApiConsumes } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";


@Controller('rackets')
export class RacketsController {
    constructor(private readonly racketsService: RacketsService) {};

    @Get()
    findAll() {
        return this.racketsService.findAll();
    }
    @Get(':id') 
    findOne(@Param('id') id: number) {
        return this.racketsService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id') id:number) {
        return this.racketsService.remove(id);
    }
    @Post()
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createRacketDto : CreateRacketDto, @UploadedFile() image: Express.Multer.File) {
        return this.racketsService.create(createRacketDto, image);
    }
}

