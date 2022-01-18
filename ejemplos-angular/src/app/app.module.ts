import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { FormsModule } from '@angular/forms';
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
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
