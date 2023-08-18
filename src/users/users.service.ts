import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from '../entities/user.entity';
import { NotFoundError } from 'rxjs';
import { error } from 'console';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}
  async getAll(): Promise<User[]> {
    try {
      return await this.UserRepository.find();
    } catch (error) {
      console.error('Error from service is:', error);
    }
  }
  async create(user: User): Promise<User> {
    return await this.UserRepository.save(user);
  }
  async getOneById(id): Promise<User | undefined> {
    try {
      const user =
        (await this.UserRepository.findOne({ where: { id: id } })) || null;
      return user;
    } catch (error) {
      console.error('User error: ', error);
    }
  }
  async getOneByName(name: string)
  {
    const user = await this.UserRepository.findOne({ where: { name: name } });
    if (!user) 
    {
      throw new Error("user not found");
    }
    else
    {
      return user;
    }
    
  }
  async update(id: number, user: User): Promise<UpdateResult> {
    return await this.UserRepository.update(id, user);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.UserRepository.delete(id);
  }
}
