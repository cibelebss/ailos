import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialExampleModule } from '../material.module';
import { AdmissaoComponent } from './admissao.component';
import { InformacoesComponent } from './informacoes/informacoes.component';

@NgModule({
  declarations: [AdmissaoComponent, InformacoesComponent],
  imports: [BrowserModule, MaterialExampleModule, ReactiveFormsModule, FormsModule],
  providers: [],
  exports: [AdmissaoComponent],
})
export class AdmissaoModule {}
