import { Injectable } from '@nestjs/common';
import { crudPrisma } from '../interfaces/crud.interface';

@Injectable()
export class DoadorService implements crudPrisma {
  Create() {
      throw new Error('Method not implemented.');
  }
  Read() {
      throw new Error('Method not implemented.');
  }
  Update() {
      throw new Error('Method not implemented.');
  }
  Delete() {
      throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}