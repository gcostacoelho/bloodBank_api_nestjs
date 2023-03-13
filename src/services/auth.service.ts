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

	validateToken(req, resp) {
		const token = req.headers.auth;

		if(token){
			jwt.verify(token, process.env.SECRET, (err, decode) => {
				if (err) {
					return resp.status(HttpStatus.BAD_GATEWAY).json({
						auth: false,
						description: 'Bearer token Invalid'
					})
				}

				return resp.status(HttpStatus.OK).json({
					auth: true,
					description: 'Bearer token valid',
					token
				})
			})
		}
	}
}
