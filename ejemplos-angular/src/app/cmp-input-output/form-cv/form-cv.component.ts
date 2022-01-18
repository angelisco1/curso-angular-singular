import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {
  @Output() cambios: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  datoCambiado(event: any): void {
    const campo = event.target.id
    const valor = event.target.value
    const cambios = {
      campo,
      valor
    }
    this.cambios.emit(cambios)
  }

}
