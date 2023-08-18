import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PropertiesModule } from './properties/properties.module';
import { Properties } from './entities/properties.entity';

@Module({
  imports: [UsersModule, 
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'PropertiesDB',
    entities: [User, Properties],
    synchronize: true
  }),
  PropertiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
