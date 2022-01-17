import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  nombre: string = 'Charles Falco'
  nombre2: string | null = null // Unión de tipos
  logoAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  tituloLogo: string = 'Angular'

  constructor() {}

  ngOnInit(): void {
  }

  getNombre(): string {
    return 'Octavia Blake'
  }

  mostrarMensaje(msg: string): void {
    console.log(msg ? msg : 'Hola mundo!!!')
  }

  verHref(event: any): void {
    event.preventDefault()
    console.log(event)
    const href = event.target.href
    console.log(`Href: ${href}`)
    // console.log('Href: ' + href)
  }

  resetNombre(): void {
    this.nombre = 'Charles Falco'
  }

  cambiarNombre(event: any): void {
    this.nombre = event.target.value
  }
}
