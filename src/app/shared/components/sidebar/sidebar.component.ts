import { Component} from '@angular/core';
import { GifService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(private gifservice:GifService){}

  get tags():string[]{
    return this.gifservice.tagHistory
  }

  buscarNuevamente(buscado:string){
    const busqueda = this.tags.filter(tag => tag === buscado)
    console.log(busqueda)
    const [busqueda2] = busqueda
    this.gifservice.searchTag(busqueda2)
  }

}

