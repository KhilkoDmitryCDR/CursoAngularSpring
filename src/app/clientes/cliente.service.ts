import { Injectable } from '@angular/core';
import { Cliente } from './clientes';
import { CLIENTES } from './clientes.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  getClientes():Cliente[]{
    return CLIENTES;
  }
}
