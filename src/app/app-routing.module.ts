import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home/home.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  {path: "", component : HomeComponent },
  {path: "user", component : HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
