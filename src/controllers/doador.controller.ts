import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Doador } from '@prisma/client';
import { DoadorDto } from 'src/Models/Dtos/DoadorDto';
import { DoadorService } from '../services/doador.service';

@ApiTags('Doador')
@Controller('doador')
export class DoadorController {
    constructor(private readonly doadorService: DoadorService) { }

    @Get()
    getDoadores(): Promise<Doador[]> {
        return this.doadorService.Read();
    }

    @Get(':cpf')
    getDoadorPerId(@Param('cpf') id: string): Promise<Doador> {
        return this.doadorService.GetPerID(id);
    }

    @Post()
    createDoador(@Body() doador: DoadorDto): Promise<Doador> {
        return this.doadorService.Create(doador);
    }

    @Put(':cpf')
    putDoador(@Body() doador: DoadorDto, @Param('cpf') id: string): Promise<Doador> {
        return this.doadorService.Update(doador, id);
    }

    @Delete(':cpf')
    deleteDoador(@Param('cpf') id: string): Promise<Doador> {
        return this.doadorService.Delete(id)
    }
}