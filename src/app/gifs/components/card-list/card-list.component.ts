import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  //esto para no hacer el ngfor directamente aca, con la logica y eso del service. pasa primero por la parte principal, proriozar componentes
  @Input()
  public gifsList:Gif[] =[]
}
