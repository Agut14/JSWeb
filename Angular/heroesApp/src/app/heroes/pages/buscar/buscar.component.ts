import { Component, OnInit } from '@angular/core';
import { HeroesResponse } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: HeroesResponse[] = [];
  heroeSeleccionado: HeroesResponse | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }


  buscar(){
    this.heroesService.getSugerencias( this.termino.trim() )
    .subscribe( heroes => this.heroes = heroes);
  }

  

  opcionSeleccionada( event: any ) {

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: HeroesResponse = event.option.value;
    this.termino = heroe.superhero;
    
    this.heroesService.getHeroePorId( heroe.id! )
    .subscribe( heroe => this.heroeSeleccionado = heroe );
    

    
  }

}
