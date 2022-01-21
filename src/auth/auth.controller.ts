import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('sigin')
    async sigIn(@Req() req) {
        return await this.authService.signIn(req.user)
    }

    @Post('sigout')
    async sigOut(@Body() userDto: UserDto) {
        return await this.authService.signUp(userDto)
    }
}
