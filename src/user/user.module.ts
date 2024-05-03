import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { USERS } from 'Shared-Service/src/entities-name';
import { UserSchema } from 'Shared-Service/src/user/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: USERS, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})

export class UserModule { }