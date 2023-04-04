import { ApiProperty } from "@nestjs/swagger";

export class DoadorDto{
    @ApiProperty()
    nome: string;

    @ApiProperty()
    cpf: string;

    @ApiProperty()
    tipoSangue: string;

    @ApiProperty()
    dataNascimento: Date;
}