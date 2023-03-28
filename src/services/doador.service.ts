import { Injectable } from '@nestjs/common';
import { DoadorDto } from '../Models/Dtos/DoadorDto';
import { PrismaConfig } from '../database/prismaConfig';
import { crudPrisma } from '../interfaces/crud.interface';
import { Doador } from '@prisma/client';

@Injectable()
export class DoadorService implements crudPrisma {
	constructor(private readonly prisma: PrismaConfig) { }
	
	async GetPerID(id: string) {
		return await this.prisma.doador.findUnique({
			where: {
				cpf: id
			}
		})
	}

	async Create(data: DoadorDto): Promise<Doador> {
		return await this.prisma.doador.create({
			data,
		});
	}

	async Read(): Promise<Doador[]> {
		return await this.prisma.doador.findMany()
	}

	async Update(data: DoadorDto, id: string) {
		return await this.prisma.doador.update({
			where: {
				cpf: id
			},
			data
		})
	}

	async Delete(id: string): Promise<Doador> {		

		return await this.prisma.doador.delete({
			where: {
				cpf: id
			}
		})
	}

}