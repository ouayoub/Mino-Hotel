import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';    
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BottomBarComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
