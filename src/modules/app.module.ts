import { Module } from '@nestjs/common';
import { BankModule } from './bank.module';
import { AuthModule } from './auth.module';

@Module({
	imports: [BankModule, AuthModule]
})
export class AppModule { }
