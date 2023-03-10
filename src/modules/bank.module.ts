import { Module } from '@nestjs/common';
import { BankService } from '../services/bank.service';
import { BankController } from '../controllers/bank.controller';

@Module({
    controllers: [BankController],
    providers: [BankService],
})
export class BankModule { }