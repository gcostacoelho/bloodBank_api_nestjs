import { Inject, Injectable } from '@nestjs/common';
import { Banco } from '@prisma/client';
import { PrismaConfig } from 'src/database/prismaConfig';
import { BankDto } from '../Models/Dtos/BankDto';
import { crudPrisma } from '../interfaces/crud.interface';
import * as dotenv from 'dotenv';
import { DoadorService } from './doador.service';

@Injectable()
export class BankService implements crudPrisma {
	constructor(private readonly prisma: PrismaConfig) { }

	@Inject(DoadorService)
	private readonly doadorService: DoadorService;

	async GetPerID(id: string) {
		return await this.prisma.banco.findUnique({
			where: {
				tipoSangue: `${id.toLowerCase()}`
			}
		})
	}

	async Create(body): Promise<Banco> {
		dotenv.config()

		const cpf = body.cpfDoador;
		const doador = await this.doadorService.GetPerID(cpf);
	
		const data = {
			tipoSangue: doador.tipoSangue,
			qtdSangue: body.qtdDoado
		}

		return await this.prisma.banco.create({
			data
		});
	}

	async Read(): Promise<Banco[]> {
		return await this.prisma.banco.findMany();
	}

	async Update(data: BankDto, id: string): Promise<Banco> {
		return await this.prisma.banco.update({
			where: {
				tipoSangue: `${id.toLowerCase()}`
			},
			data
		})
	}

	async Delete(id: string): Promise<Banco> {
		return await this.prisma.banco.delete({
			where: {
				tipoSangue: id.toLowerCase()
			}
		})
	}
}
