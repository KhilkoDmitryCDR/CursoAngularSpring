import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  listCurso:string[]=['ts','js','php'];
  habilitar:boolean=true;
  setHabilitar():void{
    this.habilitar=(this.habilitar==true)?false:true
  }
}
