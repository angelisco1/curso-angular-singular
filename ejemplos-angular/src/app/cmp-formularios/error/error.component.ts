import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnChanges {
  @Input() errores: ValidationErrors | null = null
  mensajesError: Array<string> = []

  constructor() { }

  ngOnChanges(): void {
    this.mensajesError = []

    for (let keyErr in this.errores) {
      switch(keyErr) {
        case 'required':
          this.mensajesError.push('El campo es obligatorio')
          break
        case 'minlength':
          const { actualLength, requiredLength } = this.errores[keyErr]
          const msg = `Te faltan ${requiredLength-actualLength}/${requiredLength} caracteres`
          this.mensajesError.push(msg)
          break
        case 'passwordSegura':
          const { faltanMayusculas, faltanSimbolos } = this.errores[keyErr]
          if (faltanMayusculas) {
            this.mensajesError.push('Te falta una mayúscula')
          }
          if (faltanSimbolos) {
            this.mensajesError.push('Te falta un ., una , o una _')
          }
          break
      }
    }
  }

}
