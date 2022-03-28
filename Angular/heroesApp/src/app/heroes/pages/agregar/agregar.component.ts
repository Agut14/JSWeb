import { Component, OnInit } from '@angular/core';
import { HeroesResponse, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmarComponent } from '../../components/comfirmar/comfirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width:100%;
      border-radius:5px;
    }
  `
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id:'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    }
  ]

  heroe: HeroesResponse = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img:''
  }

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               private dialog: MatDialog) { }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return;
    }
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroePorId( id ))
    )
    .subscribe((heroe) => this.heroe = heroe)
  }

  guardar(){

    if( this.heroe.superhero.trim().length === 0) {
      return;
    }

    if( this.heroe.id ){
      this.heroesService.updateHeroe( this.heroe )
      .subscribe( heroe => this.showSnackBar("Heroe actualizado correctamente"))
    }else {
      this.heroesService.agregarHeroe( this.heroe )
    .subscribe(res =>{
      this.router.navigate(['/heroes/editar', res.id]);
      this.showSnackBar("Heroe agregado correctamente")
    })
  }
    
  }

  borrar(){

    const dialog = this.dialog.open( ComfirmarComponent, {
      width: '250px'
    } )

    dialog.afterClosed().subscribe(
      (result) => {
        if( result ){
          this.heroesService.borrarHeroe( this.heroe.id! )
          .subscribe( resp => {
          this.router.navigate(['/heroes']);
          this.showSnackBar("Heroe borrado correctamente")
          })
        }
      }
    )

    
  }

  showSnackBar( message: string ) {
    this.snackBar.open( message, 'OK', {
      duration: 2500,
      data: {...this.heroe}
    } );
  }

}
