import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/porPais.interface';
import { Capital } from '../interfaces/porCapital.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private paisUrl: string = 'https://restcountries.com/v2/name';
  private capUrl: string = 'https://restcountries.com/v2/capital';
  private verPaisUrl: string = 'https://restcountries.com/v2/alpha';
  private regUrl: string = 'https://restcountries.com/v2/regionalbloc';

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,alpha3Code,flag,population');
  }




  constructor( private http: HttpClient ) { }


  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.paisUrl }/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams} );
  }

  buscarCapital( termino:string ): Observable<Capital[]> {
    const urlCap = `${ this.capUrl }/${ termino }`;

    return this.http.get<Capital[]>( urlCap, { params: this.httpParams} );
  }

  verPais( id:string ): Observable<Country[]> {
    const url = `${ this.verPaisUrl }/${ id }`;

    return this.http.get<Country[]>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {
    const url = `${ this.regUrl }/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams} );
  }
}
