import { ApiProperty } from "@nestjs/swagger";

export class BankDto{
    @ApiProperty()
    cpfDoador: string; //Puxando pelo CPF do doador já consigo obter tds as informações necessárias para prosseguir com a doação

    @ApiProperty()
    qtdDoado: number;
}