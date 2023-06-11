import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifservice:GifService){}

  get gifs():Gif[] {
    return this.gifservice.gifsList
  }
}
