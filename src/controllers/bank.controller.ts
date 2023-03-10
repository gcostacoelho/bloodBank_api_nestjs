import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankService } from '../services/bank.service';

@ApiTags('Blood Bank')
@Controller()
export class BankController {
    constructor(private readonly bankService: BankService) { }

    @Get('teste')
    getHello(): string {
        return this.bankService.getHello();
    }
}