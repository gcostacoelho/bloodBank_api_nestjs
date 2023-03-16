import { Module } from '@nestjs/common';
import { DoadorService } from '../services/doador.service';
import { DoadorController } from '../controllers/doador.controller';

@Module({
    controllers: [DoadorController],
    providers: [DoadorService],
})
export class DoadorModule { }