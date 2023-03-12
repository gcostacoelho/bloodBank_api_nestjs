import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Post,
    Res
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { EnfermeiroDto } from '../Models/Dtos/EnfermeiroDto';
import { AuthService } from '../services/auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'sucesso',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: "Erro de validação dos dados pedidos"
    })

    getTokenBearer(@Body() enfermeiro: EnfermeiroDto, @Res() resp: Response) {
        return this.authService.getTokenBearer(enfermeiro, resp);
    }

    @Get('validation')
    validateToken(): string {
        return this.authService.getHello();
    }
}