import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './editar-usuario.guard';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, ComponentCanDeactivate {
  datosGuardados: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    this.datosGuardados = true
  }

  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.datosGuardados ? true : confirm('Estás seguro?? Perderas los cambios...')
  }
}
