import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Blood Bank')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  
  @Get('teste1')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('teste2')
  getHello2(): string {
    return this.appService.getHello();
  }
}
