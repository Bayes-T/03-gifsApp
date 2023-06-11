import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-search-bar',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild("txtTagInput")
  public tagInput!:ElementRef<HTMLInputElement>



  constructor(private gifservice:GifService){}

  searchTag():void{
    this.gifservice.searchTag(this.tagInput.nativeElement.value)
    this.tagInput.nativeElement.value = ""
  }
}
