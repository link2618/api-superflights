import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PASSANGER } from 'src/common/models/models';
import { PassangerController } from './passanger.controller';
import { PassangerService } from './passanger.service';
import { PassangerSchema } from './schema/passanger.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASSANGER.name,
        useFactory: () => PassangerSchema
      }
    ])
  ],
  controllers: [PassangerController],
  providers: [PassangerService],
  exports: [PassangerService],
})
export class PassangerModule {}
