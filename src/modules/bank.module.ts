import { Module } from '@nestjs/common';
import { BankService } from '../services/bank.service';
import { BankController } from '../controllers/bank.controller';
import { PrismaConfig } from '../database/prismaConfig';
import { DoadorService } from 'src/services/doador.service';
import { DoadorModule } from './doador.module';

@Module({
    imports: [DoadorModule],
    controllers: [BankController],
    providers: [BankService, PrismaConfig, DoadorService],
})
export class BankModule { }