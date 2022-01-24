import { Component, OnInit } from '@angular/core';
import { IRespId } from './interfaces';
import { Tarea } from './tarea';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  listaTareas: Array<Tarea> = []

  constructor(private tareas: TareasService) { }

  ngOnInit(): void {
    this.tareas.getTareas()
      .subscribe((data: Array<Tarea>) => {
        // console.log({data})
        this.listaTareas = data
      })
  }

  guardar(titulo: string): void {
    const obs = this.tareas.createTarea(titulo)
    console.log({obs})
    // obs.subscribe((data: IRespId) => {
    //     console.log({data})
    //     const nuevaTarea = new Tarea(titulo, false, data.name)
    //     this.listaTareas.push(nuevaTarea)
    //   })
    // console.log({obs})
  }

  eliminarTarea(id: string) {
    this.listaTareas = this.listaTareas.filter(t => t.id !== id)
  }

  completarTarea(tareaActualizada: Tarea) {
    this.listaTareas = this.listaTareas.map(t => {
      if (t.id === tareaActualizada.id) {
        return tareaActualizada
      }
      return t
    })
  }

}
