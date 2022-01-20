import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor() { }

  pagar(): boolean {
    const num = Math.floor(Math.random()*11)
    return [1, 2, 3, 4, 7, 8].includes(num)
  }
}
