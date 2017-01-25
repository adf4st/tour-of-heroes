import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {HeroService} from "../../data-objects/hero.service";
import {Hero} from "../../data-objects/hero";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls: [ 'heroes.component.css'],
  templateUrl: 'heroes.component.html',
  providers: [HeroService]
})

export class HeroesComponent implements OnInit{
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { };

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  };

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
