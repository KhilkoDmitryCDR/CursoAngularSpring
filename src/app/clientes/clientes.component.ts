import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './clientes';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  clientes:Cliente[]=[];
  constructor(private cs:ClienteService){

  }
ngOnInit(): void {
    this.clientes=this.cs.getClientes();
}


}
