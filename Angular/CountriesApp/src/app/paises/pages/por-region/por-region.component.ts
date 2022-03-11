import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/porPais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  activarRegion( region: string ) {
    if (region === this.regionActiva ) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];
    
    this.paisService.buscarRegion( this.regionActiva )
    .subscribe( paises => this.paises = paises );
  }

  

 
}
