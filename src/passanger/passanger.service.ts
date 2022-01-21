import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IPassanger } from 'src/common/interfaces/passanger.interface';
import { PASSANGER } from 'src/common/models/models';
import { PassangerDTO } from './dto/passanger.dto';

@Injectable()
export class PassangerService {

    constructor(@InjectModel(PASSANGER.name) private model:Model<IPassanger>) {}

    async create(passangerDTO: PassangerDTO): Promise<IPassanger> {
        const newPassanger = new this.model(passangerDTO);

        return await newPassanger.save();
    }

    async findAll(): Promise<IPassanger[]> {
        return await this.model.find();
    }

    async findOne(id:string): Promise<IPassanger> {
        return await this.model.findById(id);
    }
    
    async update(id:string, passangerDTO: PassangerDTO): Promise<IPassanger> {
        return await this.model.findByIdAndUpdate(id, passangerDTO, { new: true });
    }

    async delete(id:string) {
        await this.model.findByIdAndDelete(id);

        return { 
            status: HttpStatus.OK,
            msg: 'Delete Successfully'
        }
    }
}
