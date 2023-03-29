import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankDto } from 'src/Models/Dtos/BankDto';
import { HttpResponse } from 'types/http';
import { BankService } from '../services/bank.service';

@ApiTags('Blood Bank')
@Controller('bank')
export class BankController {
    constructor(private readonly bankService: BankService) { }

    @Get()
    getDataBank(): Promise<HttpResponse>{
        return this.bankService.Read();
    }

    @Get(':tipoSangue')
    getQtdSangue(@Param('tipoSangue') sangue: string): Promise<HttpResponse>{
        return this.bankService.GetPerID(sangue);
    }

    @Post()
    addBanco(@Body() body: BankDto): Promise<HttpResponse>{
        return this.bankService.Create(body);
    }

    @Put(':tipoSangue/:qtdSangue')
    putBanco(@Param('tipoSangue') sangue: string, @Param('qtdSangue') qtdSangue: number): Promise<HttpResponse>{        
        return this.bankService.Update(qtdSangue, sangue);
    }

}