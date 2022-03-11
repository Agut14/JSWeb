import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/porPais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  errorExist: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  buscar( termino: string){
    this.errorExist = false
    this.termino = termino;
    console.log( this.termino );

    this.paisService.buscarPais( termino )
    .subscribe({
      next: (paises) => this.paises = [...paises],
      error: (e) => (this.errorExist = true, 
        console.log(e),
        this.paises = []),
      complete: () => console.log('complete')
    });
  }

  sugerencias( termino:string ){
    this.errorExist = false;
    this.buscar( termino );

  }


}
