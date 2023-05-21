import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home/home.component';
import { StoryPanelComponent } from './story-panel/story-panel.component';
import { RoomPanelComponent } from './room-panel/room-panel.component';
import { RestaurantBarPanelComponent } from './restaurant-bar-panel/restaurant-bar-panel.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CarouselComponent,
    HomeComponent,
    StoryPanelComponent,
    RoomPanelComponent,
    RestaurantBarPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
