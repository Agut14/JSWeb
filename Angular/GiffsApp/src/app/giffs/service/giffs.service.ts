import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiffsResponse, Gif } from '../interfaces/giffsInterfaces';



@Injectable({
  providedIn: 'root'
})
export class GiffsService {

  private apiKey: string = "hhSWeIlHLDGkHqrjMN2NIXfDQp1vagYE";
  private servicioUrl: string = "https://api.giphy.com/v1/gifs"
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [... this._historial];
  }

  constructor ( private http: HttpClient ) {

    if( localStorage.getItem( 'historial' ) ) {
      this._historial = JSON.parse( localStorage.getItem( 'historial' )! );
      this.resultados = JSON.parse( localStorage.getItem( 'resultados' )! );
    };
  }

  buscarGiffs( query:string ) {
    if( query.trim().length === 0 ) {
      return;
    }
    if( !this._historial.includes( query.toLowerCase() ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem( 'historial', JSON.stringify( this._historial ) );
    }

    const params = new HttpParams().set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);
    
    this.http.get<SearchGiffsResponse>(`${ this.servicioUrl }/search?`, { params }) 
    .subscribe( response => {
      this.resultados = response.data;
      localStorage.setItem( 'resultados', JSON.stringify( this.resultados ) );
      console.log( this.resultados );
    })
  }
}
