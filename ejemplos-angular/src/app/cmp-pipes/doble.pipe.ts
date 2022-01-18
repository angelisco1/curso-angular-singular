import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  // Rest Operator
  transform(value: number, descuento: number = 0): number {
    let resultado = value * 2
    // if (descuento) {
      resultado -= descuento
    // }
    return  resultado;
  }

}
