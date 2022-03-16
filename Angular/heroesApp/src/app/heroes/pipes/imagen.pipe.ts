import { Pipe, PipeTransform } from '@angular/core';
import { HeroesResponse } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( heroe: HeroesResponse ): string {
    return `assets/heroes/${ heroe.id }.jpg `;
  }

}
