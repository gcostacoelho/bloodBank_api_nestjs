import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Res
} from '@nestjs/common';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BankDto } from '../Models/Dtos/BankDto';
import { BankService } from '../services/bank.service';

@ApiBearerAuth()
@ApiTags('Blood Bank')
@Controller('bank')
export class BankController {
    constructor(private readonly bankService: BankService) { }

    @Get()
    async getDataBank(@Res() resp: Response){
        const data = await this.bankService.Read();

        return resp.status(data.statusCode).json(data.body);
    }

    @Get(':tipoSangue')
    async getQtdSangue(@Param('tipoSangue') sangue: string, @Res() resp: Response) {
        const data = await this.bankService.GetPerID(sangue);

        return resp.status(data.statusCode).json(data.body)
    }

    @Post()
    async addBanco(@Body() body: BankDto, @Res() resp: Response) {
        const data = await this.bankService.Create(body);

        return resp.status(data.statusCode).json(data.body);
    }

    @Put(':tipoSangue/:qtdSangue')
    async putBanco(@Param('tipoSangue') sangue: string, @Param('qtdSangue') qtdSangue: number, @Res() resp: Response) {
        const data = await this.bankService.Update(qtdSangue, sangue);

        return resp.status(data.statusCode).json(data.body);
    }

}