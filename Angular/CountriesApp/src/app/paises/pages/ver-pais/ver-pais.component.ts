import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/porPais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(  
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.verPais( id ) ),
      tap( console.log )
      
    )
    .subscribe( resp => this.pais = resp);


    //Otra manera de hacerlo-- Es lo mismo
    /*this.activatedRoute.params
    .subscribe( ({ id }) => {
      console.log( id );

      this.paisService.verPais( id )
      .subscribe( pais => {
        console.log( pais );
      })

    } )*/
  }

}
