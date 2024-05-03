import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SCHOOLS } from 'Shared-Service/src/entities-name';
import { SchoolDocument } from 'Shared-Service/src/school/entities/school.entity';

@Injectable()
export class SchoolService {
  constructor(@InjectModel(SCHOOLS) readonly userModel: Model<SchoolDocument>) { }

}