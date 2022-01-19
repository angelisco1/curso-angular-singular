import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, filtro: string): Array<string> {
    console.log('Se vuelve a pasar por el pipe')
    return value.filter((producto: string) => {
      return producto.includes(filtro)
    })
  }

}
