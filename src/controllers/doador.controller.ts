import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Doador } from '@prisma/client';
import { DoadorDto } from '../Models/Dtos/DoadorDto';
import { DoadorService } from '../services/doador.service';

@ApiTags('Doador')
@Controller('doador')
export class DoadorController {
    constructor(private readonly doadorService: DoadorService) { }

    @Get()
    async getDoadores(@Res() resp: Response) {
        const data = await this.doadorService.Read();

        return resp.status(data.statusCode).json(data.body)

    }

    @Get(':cpf')
    async getDoadorPerId(@Param('cpf') id: string, @Res() resp: Response) {
        const data = await this.doadorService.GetPerID(id);

        return resp.status(data.statusCode).json(data.body)
    }

    @Post()
    async createDoador(@Body() doador: DoadorDto, @Res() resp: Response) {
        const data = await this.doadorService.Create(doador);

        return resp.status(data.statusCode).json(data.body)
    }

    @Put(':cpf')
    async putDoador(@Body() doador: DoadorDto, @Param('cpf') id: string, @Res() resp: Response) {
        const data = await this.doadorService.Update(doador, id);

        return resp.status(data.statusCode).json(data.body)
    }

    @Delete(':cpf')
    async deleteDoador(@Param('cpf') id: string, @Res() resp: Response) {
        const data = await this.doadorService.Delete(id);

        return resp.status(data.statusCode).json(data.body)
    }
}