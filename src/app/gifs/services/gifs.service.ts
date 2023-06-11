import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(private http: HttpClient) {
    this.loadLocalStorage()
    if (this._tagHistory.length !== 0){
      this.searchTag(this._tagHistory[0])
    }
   }

  public gifsList:Gif[] = [] 

  private saveLocalStorage():void{
    localStorage.setItem("history", JSON.stringify(this.tagHistory))
  }

  //este es el que usé para el historial
  private _tagHistory:string[] = []
  private apiKey:string = "aC57TfxAPGt0A3xz0otsOgOIxbZ3Tmkq"
  private serviceUrl:string = "https://api.giphy.com/v1/gifs"

  get tagHistory():string[] {
    return [...this._tagHistory]
  }



  organizeTag(tag:string):void {
    tag = tag.toLocaleLowerCase()
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter(item => item !== tag)
    }
    this._tagHistory.unshift(tag)
    if(this._tagHistory.length > 10){
      this._tagHistory.splice(10,1)
    }
    //aca el local storage porque lo que estoy guardando es el historial. ademas siempre se llama esta funcion al buscar, por lo tanto siempre se llama este local storage
    this.saveLocalStorage()
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem("history")) return
   this._tagHistory = JSON.parse(localStorage.getItem("history")!)
  
  }


 searchTag(tag:string):void{
    if(tag === "") return
    this.organizeTag(tag)
    

    const params = new HttpParams()
    .set("api_key",this.apiKey )
    .set("limit", "10" )
    .set("q",tag )

    //el get es un observable?
    this.http.get<SearchResponse>(`${this.serviceUrl}/search?`, {params} )
    
    .subscribe( resp => {
      this.gifsList = resp.data
    })
    //y aca me devuelve el array con los gifs, que es la data, quiero los 10 elementos para mostrar, en este caso no es 1 obj
  }
}
