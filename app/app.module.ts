// external modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// custom components
import { AppComponent }         from './components/app/app.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';

// custom services
import { HeroService }          from './data-objects/hero.service';

//custom modules
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule { }
