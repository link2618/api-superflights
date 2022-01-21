import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PassangerDTO } from './dto/passanger.dto'
import { PassangerService } from './passanger.service';

@ApiTags('Passengers')
@Controller('api/v1/passanger')
export class PassangerController {

    constructor(private readonly passangerService: PassangerService) {}

    @Post()
    create(@Body() passangerDTO: PassangerDTO) {
        return this.passangerService.create(passangerDTO)
    }

    @Get()
    findAll() {
        return this.passangerService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.passangerService.findOne(id)
    }

    @Put(':id')
    udate(@Param('id') id: string, @Body() passangerDTO: PassangerDTO) {
        return this.passangerService.update(id, passangerDTO)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.passangerService.delete(id)
    }
}
