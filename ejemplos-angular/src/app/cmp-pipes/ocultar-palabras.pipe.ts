import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(value: string, palabras: Array<string>): string {
    palabras.forEach(palabra => {
      const regexp = new RegExp(palabra, 'gi')
      value = value.replace(regexp, '*'.repeat(palabra.length))
      // value = value.replaceAll(palabra, '*'.repeat(palabra.length))
    })

    return value;
  }

}
