import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialExampleModule } from '../material.module';
import { AdmissaoComponent } from './admissao.component';

@NgModule({
  declarations: [AdmissaoComponent],
  imports: [BrowserModule, MaterialExampleModule, ReactiveFormsModule, FormsModule],
  providers: [],
  exports: [AdmissaoComponent],
})
export class AdmissaoModule {}
