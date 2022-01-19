import { Component, OnInit } from '@angular/core';

interface IProducto {
  titulo: string,
  precio: number,
  descripcion: string,
  fechaLanzamiento: Date,
  caracteristicas?: Array<string>
}

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
  producto: IProducto = {
    titulo: 'one plus 9',
    precio: 700,
    descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error rerum obcaecati exercitationem iste libero, ipsam, voluptas molestiae possimus laboriosam est suscipit fugiat. Natus, exercitationem blanditiis maxime assumenda qui fuga quaerat!',
    fechaLanzamiento: new Date(2021, 4, 12)
  }

  texto: string = 'La noche se avecina, ahora empieza mi guardia. No terminará hasta el día de mi muerte. No tomaré esposa, no poseeré tierras, no engendraré hijos. No llevaré corona, no alcanzaré la gloria. Viviré y moriré en mi puesto. Soy la espada en la oscuridad. Soy el vigilante del Muro. Soy el fuego que arde contra...'

  listaProductos: Array<string> = [
    'One Plus 9',
    'One Plus 10',
    'iPhone 13',
    'Nokia 3260'
  ]
  textoFiltro: string = ''

  mensaje = new Promise((resolve) => {
    setTimeout(() => {
      resolve('El canario está en la jaula...')
    }, 2000)
  })


  constructor() { }

  ngOnInit(): void {
    this.producto.caracteristicas = []
  }

  addProducto(event: any): void {
    // this.listaProductos.push(event.target.value)
    this.listaProductos = [...this.listaProductos, event.target.value]
  }

  filtrarLista(event: any): void {
    this.textoFiltro = event.target.value
  }

}
