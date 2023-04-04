import { ApiProperty } from "@nestjs/swagger";

export class EnfermeiroDto{
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    crm: string;
}