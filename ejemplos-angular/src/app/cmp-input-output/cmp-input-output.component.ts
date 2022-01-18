import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-input-output',
  templateUrl: './cmp-input-output.component.html',
  styleUrls: ['./cmp-input-output.component.css']
})
export class CmpInputOutputComponent implements OnInit {
  nombre: string = ''
  apellidos: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  mostrarString(event: any): void {
    console.log(event)
  }

  cambiarProps(event: any): void {
    switch(event.campo) {
      case 'nombre':
        this.nombre = event.valor
        break
      case 'apellidos':
        this.apellidos = event.valor
        break
    }
  }
}
