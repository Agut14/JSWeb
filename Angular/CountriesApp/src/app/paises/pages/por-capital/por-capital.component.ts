import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Capital } from '../../interfaces/porCapital.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  errorExist: boolean = false;
  capitales: Capital[] = [];

  constructor( private paisService: PaisService) { }

  buscar( termino: string){
    this.errorExist = false
    this.termino = termino;
    console.log( this.termino );

    this.paisService.buscarCapital( termino )
    .subscribe({
      next: (capitales) => this.capitales = [...capitales],
      error: (e) => (this.errorExist = true, 
        console.log(e),
        this.capitales = []),
      complete: () => console.log('complete')
    });
  }

  sugerencias( termino:string ){
    this.errorExist = false;
    this.buscar( termino );
    console.log( termino );


  }


}



