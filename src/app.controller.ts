import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('main')
export class AppController {

  @Get('get/all')
  Hello(@Query('how') how: string) {
    return [how];
  }
  @Get(':id')
  client(@Param('id') id: string)
  {
    return {id};
  }
}
