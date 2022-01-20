import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {
  formulario: FormGroup

  get erroresUsername(): ValidationErrors | null {
    return this.formulario.controls['username'].errors
  }

  get erroresPw(): ValidationErrors | null {
    return this.formulario.controls['password'].errors
  }

  get erroresConfirmPw(): ValidationErrors | null {
    return this.formulario.controls['confirmarPassword'].errors
  }

  constructor() {
    this.formulario = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, CustomValidators.passwordSegura, CustomValidators.passwordMasUsadas(['1234', 'qwerty', 'password'])]),
      confirmarPassword: new FormControl('', [Validators.required, CustomValidators.passwordIguales]),
    })
  }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log(this.formulario)
    console.log(this.formulario.value)
  }

  pintarErrores(campo: string): boolean {
    return this.formulario.controls[campo].invalid && this.formulario.controls[campo].dirty
  }
}
