import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static passwordSegura(control: AbstractControl): ValidationErrors | null {
    const password = control.value
    const errors = {
      faltanMayusculas: password === password.toLowerCase(),
      faltanSimbolos: !new RegExp('[,._]+').test(password),
    }

    return (errors.faltanMayusculas || errors.faltanSimbolos) ? {passwordSegura: errors} : null
  }
}