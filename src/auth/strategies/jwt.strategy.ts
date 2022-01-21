import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';

require('dotenv').config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(private readonly config: ConfigService) {
        super({ 
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // secretOrKey: 'JWTCL4v3S3cr3t4@Api',
            secretOrKey: process.env.JWT_SECRET,
            // secretOrKey: config.get('JWT_SECRET')
        })
    }

    async validate(payLoad: any) {
        return { 
            userId: payLoad.sub,
            username: payLoad.username
        }
    }
}