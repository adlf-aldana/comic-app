import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroesService/heroes-service.service';
import { ActivatedRoute } from '@angular/router';
import { HeroesInterfaz } from 'src/app/interfaz/heroes-interfaz';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: HeroesInterfaz;
  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = _heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
