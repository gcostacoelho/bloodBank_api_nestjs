import { Inject, Injectable } from '@nestjs/common';
import { PrismaConfig } from 'src/database/prismaConfig';
import { DoadorService } from './doador.service';
import { created, HttpResponse, notFound, success } from 'types/http';

@Injectable()
export class BankService {
	constructor(private readonly prisma: PrismaConfig) { }

	@Inject(DoadorService)
	private readonly doadorService: DoadorService;

	async GetPerID(id: string): Promise<HttpResponse> {
		return success(
			await this.prisma.banco.findUnique({
				where: {
					tipoSangue: `${id.toLowerCase()}`
				}
			})
		);
	}

	async Create(body): Promise<HttpResponse> {
		const cpf = body.cpfDoador;
		const doador = await this.doadorService.GetPerID(cpf);

		if (doador == null) {
			return notFound("Doador não encontrado, não é possível realizar a doação");
		}

		const data = {
			tipoSangue: doador.tipoSangue,
			qtdSangue: body.qtdDoado
		}

		await this.prisma.banco.create({
			data
		});

		return created(data);
	}

	async Read(): Promise<HttpResponse> {
		return success(
			await this.prisma.banco.findMany()
		);
	}

	async Update(qtdSangue: number, id: string): Promise<HttpResponse> {
		const body = await this.prisma.banco.update({
			where: {
				tipoSangue: `${id.toLowerCase()}`
			},
			data: {
				qtdSangue
			}
		});

		return success(body);
	}
}
