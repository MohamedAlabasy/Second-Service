import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USERS } from 'Shared-Service/src/entities-name';
import { NOT_FOUND } from 'Shared-Service/src/constants/constants';
import { User, UserDocument } from 'Shared-Service/src/user/entities/user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(@InjectModel(USERS) readonly userModel: Model<UserDocument>) { }


  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    } catch (error) {
      this.logger.error('create : ' + error.message);
      throw new HttpException(error.message, error.statues || HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


  async updateById(_id: string, updateBrandDto: UpdateUserDto): Promise<User> {
    try {
      const user = await this.userModel.findByIdAndUpdate({ _id }, updateBrandDto, { new: true });
      if (!user) throw new HttpException(NOT_FOUND, HttpStatus.NOT_FOUND);

      return user;
    } catch (error) {
      this.logger.error('updateById : ' + error.message);
      throw new HttpException(error.message, error.statues || HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userModel.find();
    } catch (error) {
      this.logger.error('getAllUsers : ' + error.message);
      throw new HttpException(error.message, error.statues || HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


  async getById(_id: string): Promise<User> {
    try {
      const user = await this.userModel.findById(_id);
      if (!user) throw new HttpException(NOT_FOUND, HttpStatus.NOT_FOUND);

      return user;
    } catch (error) {
      this.logger.error('getById : ' + error.message);
      throw new HttpException(error.message, error.statues || HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

}