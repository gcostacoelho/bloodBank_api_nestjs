import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BankService } from '../services/bank.service';

@ApiTags('Blood Bank')
@ApiBearerAuth()
@Controller()
export class BankController {
    constructor(private readonly bankService: BankService) { }

    @Get('teste')
    getHello(): string {
        return this.bankService.getHello();
    }
}