import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroesService/heroes-service.service';
import { HeroesInterfaz } from '../../interfaz/heroes-interfaz';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: HeroesInterfaz[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);

  }

}
