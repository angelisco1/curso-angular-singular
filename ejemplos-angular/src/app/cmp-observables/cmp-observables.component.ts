import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {
  mostrarCmp: boolean = true

  constructor() { }

  ngOnInit(): void {

    const obs1 = new Observable((subscriber: Subscriber<string>) => {
      setTimeout(() => {
        subscriber.next('Mensaje 1')
      }, 2000)
      setTimeout(() => {
        subscriber.next('Mensaje 2')
      }, 4000)
      setTimeout(() => {
        // subscriber.error('Hay un error 😭')
        subscriber.complete()
      }, 6000)
      setTimeout(() => {
        subscriber.next('Mensaje 3')
      }, 7000)
    })

    obs1.subscribe({
      next: (msg: string) => {
        console.log(msg)
      },
      error: (err: any) => {
        console.log('Tenemos un error', err)
      },
      complete: () => {
        console.log('Se ha terminado...')
      }
    })

  }

  toggleMostrarCmp() {
    this.mostrarCmp = !this.mostrarCmp
  }

}
