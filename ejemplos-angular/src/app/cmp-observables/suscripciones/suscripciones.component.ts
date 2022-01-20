import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { PagosService } from '../pagos.service';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.css']
})
export class SuscripcionesComponent implements OnInit {
  @Input() plataforma: string = ''
  @Input() precio: number = 0
  fechaProxPago: Date | null = null
  activa: boolean = false
  suscripcionCancelada$: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private pagos: PagosService) { }

  ngOnInit(): void {
  }

  private getProxFecha(): Date {
    const nuevaFecha = new Date()
    nuevaFecha.setSeconds(nuevaFecha.getSeconds() + 5)
    return nuevaFecha
  }

  activarSuscripcion() {
    new Observable((subscriber: Subscriber<string>) => {
      this.fechaProxPago = this.getProxFecha()
      subscriber.next(`Gracias por suscribirte al servicio... El próximo cobro será ${new DatePipe('en-US').transform(this.fechaProxPago, 'hh:mm:ss')}`)

      const intervalId = setInterval(() => {
        if (this.pagos.pagar()) {
          this.fechaProxPago = this.getProxFecha()

          subscriber.next(`Se te ha cobrado correctamente. El siguiente pago se realizará el ${new DatePipe('en-US').transform(this.fechaProxPago, 'hh:mm:ss')}`)
        } else {
          subscriber.error('No se te ha podido cobrar. Actualiza tu método de pago y vuelvete a suscribir...')
          clearInterval(intervalId)
        }
      }, 5000)

      this.suscripcionCancelada$.subscribe(() => {
        subscriber.complete()
        clearInterval(intervalId)
      })

    })
    .subscribe({
      next: (msg: string) => {
        this.activa = true
        console.log(msg)
      },
      error: (err: string) => {
        this.activa = false
        console.error(err)
      },
      complete: () => {
        this.activa = false
        console.info('Has cancelado la suscripción. Esperamos que vuelvas pronto...')
      }
    })

  }

  cancelarSuscripcion() {
    this.suscripcionCancelada$.emit(true)
  }

}
