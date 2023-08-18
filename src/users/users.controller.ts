import { Controller, Get, Post, Body, Patch, Param, Delete , Query, Put} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity'
import { NotFoundException } from '@nestjs/common/exceptions';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post('create')
  create(@Body() User: User): Promise<User>
  {
    return this.usersService.create(User);
  }

  @Get('get/all')
  async findall(): Promise<User[]>
  {
    return await this.usersService.getAll();
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number)
  {
    return await this.usersService.delete(id)
  }

  @Put('update/:id')
  async update(@Param('id') id:number, @Body() user:User)
  {
    return await this.usersService.update(id,user)
  }

  @Get('get/id/:id')
  findOne(@Param('id') id: number)
  {
    return this.usersService.getOneById(id);
  }

  @Get('get/name/:name')
  async findName(@Param('name') name:string): Promise<User>
  {
    try
    {
      const user = await this.usersService.getOneByName(name);
      return user;
    }
    catch(err)
    {
      throw new NotFoundException();
    }
  }
}
