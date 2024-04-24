import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IPokemon } from '../interfaces/ipokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // injecting HttpClient as a dependency
  // HttpClient is a class that allows us to perform Http requests (GET POST PUT)
  http = inject(HttpClient);
  
  getPokemon(userInput = 'bulbasaur') {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
  } // Generic of type Pokemon
}
