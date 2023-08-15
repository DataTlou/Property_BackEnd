import { Controller, Get, Post, Body, Patch, Param, Delete , Query, Put} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity'

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
  findName(@Param('name') name:string)
  {
    const user = this.usersService.getOneByName(name);
    if(user === null)
    { 
      return "User is not found";
    }

    return  user;
  }
}
