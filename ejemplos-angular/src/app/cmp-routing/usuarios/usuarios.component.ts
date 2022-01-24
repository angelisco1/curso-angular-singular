import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<any> = []

  // Estas peticiones deben de ir en un servicio
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/users')
      .subscribe((usuarios: any) => {
        console.log({usuarios})
        this.usuarios = usuarios
      })
  }

}
