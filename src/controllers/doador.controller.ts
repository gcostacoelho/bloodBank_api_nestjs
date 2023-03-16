import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DoadorService } from '../services/doador.service';

@ApiTags('Doador')
@Controller()
export class DoadorController {
    constructor(private readonly doadorService: DoadorService) { }

    @Get('teste/doador')
    getHello(): string {
        return this.doadorService.getHello();
    }
}