import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Properties } from 'src/entities/properties.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertiesService {
  constructor(@InjectRepository(Properties) private PropertyRepo: Repository<Properties>)
  {}
  async create(property: Properties): Promise<Properties> 
  {
    return await this.PropertyRepo.save(property);
  }

  async findAll(): Promise<Properties[]>
  {
    return await this.PropertyRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }


  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
