import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/services/auth.service';

@ApiTags('Authorization')
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('teste1')
    getHello(): string {
        return this.authService.getHello();
    }
}