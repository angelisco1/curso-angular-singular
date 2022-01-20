import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datos: Array<string> = ['Item 1']

  constructor() { }

  get items(): Array<string> {
    return this.datos
  }

  addItem(item: string): void {
    this.datos.push(item)
  }
}
