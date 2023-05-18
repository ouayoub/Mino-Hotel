import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
