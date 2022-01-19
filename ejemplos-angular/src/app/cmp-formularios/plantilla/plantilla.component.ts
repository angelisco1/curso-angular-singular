import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
  datosForm = {
    username: '',
    password: '',
    confirmarPassword: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(form: NgForm): void {
    console.log(form)
    console.log('Guardando los datos...', form.value)
    console.log(this.datosForm)
  }

}
