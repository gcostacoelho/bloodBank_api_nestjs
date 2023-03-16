import { Module } from '@nestjs/common';
import { BankModule } from './bank.module';
import { AuthModule } from './auth.module';
import { DoadorModule } from './doador.module';

@Module({
	imports: [AuthModule, DoadorModule, BankModule]
})
export class AppModule { }
