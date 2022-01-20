import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { SugusComponent } from './cmp-input-output/sugus/sugus.component';
import { MiBotonComponent } from './cmp-input-output/mi-boton/mi-boton.component';
import { FormCvComponent } from './cmp-input-output/form-cv/form-cv.component';
import { PreviewCvComponent } from './cmp-input-output/preview-cv/preview-cv.component';
import { CmpReferenciasComponent } from './cmp-referencias/cmp-referencias.component';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { OcultarPalabrasPipe } from './cmp-pipes/ocultar-palabras.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { ErrorComponent } from './cmp-formularios/error/error.component';
import { ReactivosComponent } from './cmp-formularios/reactivos/reactivos.component';
import { PlantillaComponent } from './cmp-formularios/plantilla/plantilla.component';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';
import { UnsubscribeComponent } from './cmp-observables/unsubscribe/unsubscribe.component';
import { SuscripcionesComponent } from './cmp-observables/suscripciones/suscripciones.component';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { TareaComponent } from './cmp-http/tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    CmpDataBindingComponent,
    CmpInputOutputComponent,
    SugusComponent,
    MiBotonComponent,
    FormCvComponent,
    PreviewCvComponent,
    CmpReferenciasComponent,
    CmpDirectivasComponent,
    MarcarDirective,
    CmpPipesComponent,
    DoblePipe,
    OcultarPalabrasPipe,
    FiltroPipe,
    CmpFormulariosComponent,
    ErrorComponent,
    ReactivosComponent,
    PlantillaComponent,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    CmpObservablesComponent,
    UnsubscribeComponent,
    SuscripcionesComponent,
    CmpHttpComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
