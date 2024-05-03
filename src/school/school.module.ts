import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SchoolController } from './school.controller';
import { SCHOOL } from 'Shared-Service/src/entities-name';
import { SchoolSchema } from 'Shared-Service/src/school/entities/school.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: SCHOOL, schema: SchoolSchema }])],
  controllers: [SchoolController],
  providers: [SchoolService],
  exports: [SchoolService],
})

export class SchoolModule { }