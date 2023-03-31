import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        dotenv.config()

        if (req.headers.authorization) {
            const tokenSplited: string = req.headers.authorization.split(' ')[1];

            const error: any = jwt.verify(tokenSplited, process.env.SECRET,
                (err) => {
                    if (err) {
                        return err
                    }
                });

            if (error) {
                return res.status(HttpStatus.UNAUTHORIZED).json('Unauthorized');
            }

            return next();
        }

        return res.status(HttpStatus.UNAUTHORIZED).json('Unauthorized');
    }
}
