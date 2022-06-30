import { SidenavComponent } from './sidenav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [SidenavComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [SidenavComponent]
})
export class SidenavModule { }
