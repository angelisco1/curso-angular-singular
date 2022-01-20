import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  static passwordSegura(control: AbstractControl): ValidationErrors | null {
    const password = control.value
    const errors = {
      faltanMayusculas: password === password.toLowerCase(),
      faltanSimbolos: !new RegExp('[,._]+').test(password),
    }

    return (errors.faltanMayusculas || errors.faltanSimbolos) ? {passwordSegura: errors} : null
  }

  static passwordMasUsadas(listaPwMasUsadas: Array<string>): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return listaPwMasUsadas.includes(control.value) ? {passwordMasUsadas: true} : null
    }
  }

  static passwordIguales(control: AbstractControl): ValidationErrors | null {
    const confirmarPassword = control.value
    const password = control.parent?.get('password')?.value

    return confirmarPassword === password ? null : {passwordIguales: false}
  }
}