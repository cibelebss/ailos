import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [NavbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
