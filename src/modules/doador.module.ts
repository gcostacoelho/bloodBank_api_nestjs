import { Module } from '@nestjs/common';
import { DoadorService } from '../services/doador.service';
import { DoadorController } from '../controllers/doador.controller';
import { PrismaConfig } from '../database/prismaConfig';

@Module({
    controllers: [DoadorController],
    providers: [DoadorService, PrismaConfig],
    exports: [DoadorService]
})
export class DoadorModule { }