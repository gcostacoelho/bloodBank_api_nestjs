import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Post,
    Req,
    Res
} from '@nestjs/common';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { response, Response } from 'express';
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


    @ApiHeader({
        name: 'Auth',
        description: 'Insert your token here',
        required: true
    })
    @Get('validation')
    validateToken(@Req() req: Request, @Res() resp: Response){
        return this.authService.validateToken(req, resp);
    }
}