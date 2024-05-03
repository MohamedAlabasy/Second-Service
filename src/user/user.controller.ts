import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ParseObjectIdPipe } from 'Shared-Service/src/validators/src/validators/parse-object-id-pipe.validators';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createBrandDto: CreateUserDto) {
    return await this.userService.create(createBrandDto);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Patch(':id')
  async updateById(@Param('id', ParseObjectIdPipe) id: string, @Body() updateBrandDto: UpdateUserDto) {
    return await this.userService.updateById(id, updateBrandDto);
  }


  @Get(':id')
  async getById(@Param('id', ParseObjectIdPipe) id: string) {
    return await this.userService.getById(id);
  }

}