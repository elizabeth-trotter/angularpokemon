import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { IPokemon } from '../../interfaces/ipokemon';
import { DisplayPokemonComponent } from "../display-pokemon/display-pokemon.component";

@Component({
    selector: 'app-pokemon',
    standalone: true,
    templateUrl: './pokemon.component.html',
    styleUrl: './pokemon.component.css',
    imports: [DisplayPokemonComponent]
})
export class PokemonComponent implements OnInit {
  pokemonService = inject(PokemonService);
  pokemonData: IPokemon | null = null; // Union for multiple types (NOT or)

  pokemonName = 'bulbasaur';

  hint = '';

  loadPokemon(){
    this.pokemonService.getPokemon(this.pokemonName).subscribe((pokemon) => { //subscribe observes when the fetch is fufilled or data changes, it executes the function being given
      console.log(pokemon)
      this.pokemonData = pokemon;
    })
  }

  ngOnInit() {
    this.loadPokemon();
  }

  setName(userInput: string) {
    this.pokemonName = userInput;
    this.loadPokemon();
  }
}