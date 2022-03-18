import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroesResponse } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<HeroesResponse[]> {
    return this.http.get<HeroesResponse[]>(  'http://localhost:3000/heroes' )
  }

  getHeroePorId( id: string ): Observable<HeroesResponse> {
    return this.http.get<HeroesResponse>( `http://localhost:3000/heroes/${id}` )
  }

  getSugerencias( termino: string ): Observable<HeroesResponse[]>{
    return this.http.get<HeroesResponse[]>( `http://localhost:3000/heroes/?q=${termino}&_limit=6` )
  }
}
