import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('api/v1/user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiOperation({summary: 'Create User'})
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: UserDto})
    create(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDto: UserDto) {
        return this.userService.update(id, userDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
