import { MiddlewareConsumer, Module } from '@nestjs/common';
import { BankModule } from './bank.module';
import { AuthModule } from './auth.module';
import { DoadorModule } from './doador.module';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { BankController } from 'src/controllers/bank.controller';
import { DoadorController } from 'src/controllers/doador.controller';

@Module({
	imports: [
		AuthModule,
		DoadorModule,
		BankModule
	]
})

export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(AuthMiddleware).forRoutes(BankController, DoadorController);
	}
}
