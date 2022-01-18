import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {
  colorLetra: string = '#000000'
  tareaHecha: boolean = false
  darkMode: boolean = true

  colores: Array<string> = ['blue', 'red', 'orange', 'black']
  // colores: string[] | number[] = ['blue', 'red', 'orange', 'black']

  colorSeleccionado: string = 'orange'

  constructor() { }

  ngOnInit(): void {
  }

  toggleHecha(): void {
    this.tareaHecha = !this.tareaHecha
  }

  toggleDarkMode(activado: boolean): void {
    this.darkMode = activado
  }

}
