import { RouterModule, Routes } from "@angular/router";
import { EditarUsuarioComponent } from "./editar-usuario/editar-usuario.component";
import { EditarUsuarioGuard } from "./editar-usuario/editar-usuario.guard";
import { Error404Component } from "./error404/error404.component";
import { InfoUsuarioComponent } from "./info-usuario/info-usuario.component";
import { InfoUsuarioGuard } from "./info-usuario/info-usuario.guard";
import { NuevoUsuarioComponent } from "./nuevo-usuario/nuevo-usuario.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

const USUARIOS_ROUTES: Routes = [
  { path: ':id/info', component: InfoUsuarioComponent, canActivate: [InfoUsuarioGuard] },
  { path: ':id/editar', component: EditarUsuarioComponent, canDeactivate: [EditarUsuarioGuard] },
]


const APP_ROUTES: Routes = [
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  // { path: 'usuarios/:id', component: InfoUsuarioComponent },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: '**', component: Error404Component },
]

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)