import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertiesModule } from './properties/properties.module';
import  { dataSourceOptions } from '../db/data-source';

@Module({
  imports: [ 
  TypeOrmModule.forRoot(dataSourceOptions),UsersModule,PropertiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
