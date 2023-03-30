import { Injectable } from '@nestjs/common';
import { DoadorDto } from '../Models/Dtos/DoadorDto';
import { PrismaConfig } from '../database/prismaConfig';
import { crudPrisma } from '../interfaces/crud.interface';
import { created, HttpResponse, notFound, success } from 'types/http';

@Injectable()
export class DoadorService implements crudPrisma {
	constructor(private readonly prisma: PrismaConfig) { }

	async GetPerID(id: string) {
		const doador = await this.prisma.doador.findUnique({
			where: {
				cpf: id
			}
		})

		if (doador) {
			return success(doador)
		}

		return notFound("Doador não encontrado")
	}

	async Create(data: DoadorDto): Promise<HttpResponse> {
		const newDoador = await this.prisma.doador.create({
			data,
		});

		return created(newDoador);
	}

	async Read(): Promise<HttpResponse> {
		const doadores = await this.prisma.doador.findMany()

		return success(doadores);
	}

	async Update(data: DoadorDto, id: string) {
		const doadorUpdate = await this.prisma.doador.update({
			where: {
				cpf: id
			},
			data
		})

		return success(doadorUpdate);
	}

	async Delete(id: string): Promise<HttpResponse> {

		const doadorDelete = await this.prisma.doador.delete({
			where: {
				cpf: id
			}
		});

		return success(doadorDelete);
	}

}