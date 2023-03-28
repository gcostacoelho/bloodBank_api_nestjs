import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Banco } from '@prisma/client';
import { BankDto } from 'src/Models/Dtos/BankDto';
import { BankService } from '../services/bank.service';

@ApiTags('Blood Bank')
@Controller('bank')
export class BankController {
    constructor(private readonly bankService: BankService) { }

    @Get()
    getDataBank(): Promise<Banco[]> {
        return this.bankService.Read();
    }

    @Get(':tipoSangue')
    getQtdSangue(@Param('tipoSangue') sangue: string): Promise<Banco>{
        return this.bankService.GetPerID(sangue);
    }

    @Post()
    addBanco(@Body() body: BankDto): Promise<Banco>{
        return this.bankService.Create(body);
    }
}