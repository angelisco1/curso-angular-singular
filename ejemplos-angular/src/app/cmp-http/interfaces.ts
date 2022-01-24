import { Tarea } from './tarea';


export interface IRespTarea {
  [key: string]: Tarea;
}

export interface IRespId {
  name: string;
}
