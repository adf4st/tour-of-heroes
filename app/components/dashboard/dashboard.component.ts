import { Component } from '@angular/core';
import {HeroService} from "../../data-objects/hero.service";
import {Hero} from "../../data-objects/hero";

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css']
})

export class DashboardComponent {
      constructor(private heroService: HeroService) { };

      heroes: Hero[] = [];

      ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5))
      }
 };
