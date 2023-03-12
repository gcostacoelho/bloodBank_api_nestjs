import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

@Injectable()
export class AuthService {

  getTokenBearer(req, resp): Object {
    dotenv.config();
    const token = jwt.sign({ expiresIn: "300" }, process.env.SECRET);

    return resp.status(HttpStatus.OK).json({
      auth: true,
      access_token: token,
      type: 'Bearer'
    })

  }

  getHello(): string {
    return 'Hello World!';
  }
}
