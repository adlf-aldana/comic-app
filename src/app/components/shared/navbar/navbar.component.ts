import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroesService/heroes-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(heroe: string) {
    let nombreHeroe = this._heroesService.buscarHeroes(heroe);

    if (nombreHeroe[0])
      this.router.navigate(['/heroes', nombreHeroe[0]['nombre']])
    else{
      alert('Heroe no encontrado')
      this.router.navigate(['/heroes']);
    }
  }

}
