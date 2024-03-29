import { Inject, Injectable } from '@nestjs/common';
import { PrismaConfig } from 'src/database/prismaConfig';
import { DoadorService } from './doador.service';
import { created, HttpResponse, notFound, success } from 'src/types/http';

@Injectable()
export class BankService {
	constructor(private readonly prisma: PrismaConfig) { }

	@Inject(DoadorService)
	private readonly doadorService: DoadorService;

	async GetPerID(id: string): Promise<HttpResponse> {
		const body = await this.prisma.banco.findUnique({
			where: {
				tipoSangue: `${id.toLowerCase()}`
			}
		});

		if(body == null){
			return notFound('Tipo de sangue não encontrado')
		}
		
		return success(body);
	}

	async Create(body): Promise<HttpResponse> {
		const cpf = body.cpfDoador;
		const doador = await this.doadorService.GetPerID(cpf);

		if (doador == null) {
			return notFound("Doador não encontrado, não é possível realizar a doação");
		}

		const data = {
			tipoSangue: doador.body.tipoSangue,
			qtdSangue: body.qtdDoado
		}

		await this.prisma.banco.create({
			data
		});

		return created(data);
	}

	async Read(): Promise<HttpResponse> {
		const bank = await this.prisma.banco.findMany()

		return success(bank);
	}

	async Update(qtdSangue: number, id: string): Promise<HttpResponse> {
		const bloodExists = await this.GetPerID(id);

		if(bloodExists.statusCode == 404){
			return notFound(bloodExists.body);
		}

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
