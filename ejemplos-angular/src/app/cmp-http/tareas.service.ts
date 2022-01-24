import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { IRespId, IRespTarea } from './interfaces';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private URL: string = environment.urlFirebase

  constructor(private http: HttpClient) { }

  createTarea(titulo: string): Observable<IRespId> {
    const tarea = new Tarea(titulo)
    return this.http.post<IRespId>(`${this.URL}.json`, tarea)
  }

  getTareas(): Observable<Array<Tarea>> {
    return this.http.get<IRespTarea>(`${this.URL}.json`)
      .pipe(
        map((data: IRespTarea) => {
          const tareas: Array<Tarea> = []

          for (let id in data) {
            const { completada, titulo } = data[id]
            const tarea = new Tarea(titulo, completada, id)
            tareas.push(tarea)
          }

          return tareas
        })
      )
  }

  delTarea(idTarea: string): Observable<null> {
    return this.http.delete<null>(`${this.URL}/${idTarea}.json`)
  }

  completeTarea(idTarea: string, completada: boolean): Observable<Partial<Tarea>> {
    return this.http.patch<Partial<Tarea>>(`${this.URL}/${idTarea}.json`, {completada})
  }
}
