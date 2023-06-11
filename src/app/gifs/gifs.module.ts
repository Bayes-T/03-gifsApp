import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BusquedaComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomePageComponent]
})
export class GifsModule { }
