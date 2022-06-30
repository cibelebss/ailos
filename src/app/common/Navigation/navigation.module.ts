import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopnavModule } from './topnav/topnav.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    TopnavModule,
    SidenavModule],
  providers: [],
  exports: [NavigationComponent],
})
export class NavigationModule { }
