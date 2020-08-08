import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroesService/heroes-service.service';
import { HeroesInterfaz } from '../../interfaz/heroes-interfaz';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: HeroesInterfaz[] = [];
  nombreBusquedaHeroe: string


  constructor(private _heroesService: HeroesService,
    private _activatedRouter: ActivatedRoute,
    private _router: Router) {

  }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe(params => {

      if (params['nombre'] != null) {
        this.nombreBusquedaHeroe = params['nombre']
        this.heroes = this._heroesService.buscarHeroes(params['nombre']);
      } else {
        this.heroes = this._heroesService.getHeroes();
      }
    });

    // console.log(this.nombreBusquedaHeroe);

    // if (this.nombreBusquedaHeroe != undefined)
    //   this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index: number) {

    if (this.heroes[0].index)
      this._router.navigate(['/heroe', this.heroes[0].index])
    else
      this._router.navigate(['/heroe', index])
  }



  // heroes: HeroesInterfaz[] = [];

  // constructor(private _heroesService: HeroesService) { }

  // ngOnInit(): void {
  //   this.heroes = this._heroesService.getHeroes();
  // }

}
