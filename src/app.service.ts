import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 
    [{
        id: 1,
        name: 'Hello'
      }]  
      ;
  }
}
