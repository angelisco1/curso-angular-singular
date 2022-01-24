import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../tarea';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea = new Tarea('')
  @Output() tareaEliminada: EventEmitter<string> = new EventEmitter<string>()
  @Output() tareaCompletada: EventEmitter<Tarea> = new EventEmitter<Tarea>()

  constructor(private tareas: TareasService) { }

  ngOnInit(): void {
  }

  eliminar(): void {
    this.tareas.delTarea(this.tarea.id!)
      .subscribe(() => {
        this.tareaEliminada.emit(this.tarea.id!)
      })
  }

  completar(): void {
    this.tareas.completeTarea(this.tarea.id!, !this.tarea.completada)
      .subscribe((data: Partial<Tarea>) => {
        console.log({data})
        this.tareaCompletada.emit(new Tarea(this.tarea.titulo, data.completada, this.tarea.id))
      })
  }

}
