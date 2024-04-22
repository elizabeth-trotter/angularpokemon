import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

export const routes: Routes = [
    {
        path: '', //default route on load
        component: HomeComponent,
    },
    {
        path: 'pokemon',
        component: PokemonComponent
    }
];
