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

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    CmpDataBindingComponent,
    CmpInputOutputComponent,
    SugusComponent,
    MiBotonComponent,
    FormCvComponent,
    PreviewCvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
