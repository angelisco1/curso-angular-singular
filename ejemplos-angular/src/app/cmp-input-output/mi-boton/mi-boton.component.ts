import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mi-boton',
  templateUrl: './mi-boton.component.html',
  styleUrls: ['./mi-boton.component.css']
})
export class MiBotonComponent implements OnInit {
  @Input() texto: string = ''
  @Output() btnPulsado: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  emitirEvento() {
    this.btnPulsado.emit('Se ha pulsado el botón...')
  }

}
