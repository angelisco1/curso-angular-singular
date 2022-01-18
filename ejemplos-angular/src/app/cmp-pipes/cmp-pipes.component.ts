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


  constructor() { }

  ngOnInit(): void {
    this.producto.caracteristicas = []
  }

}
