import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [SidenavComponent],
})
export class SidenavModule {}
