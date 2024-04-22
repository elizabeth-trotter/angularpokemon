import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonService = inject(PokemonService);

  loadPokemon(){
    this.pokemonService.getPokemon().subscribe((pokemon) => { //subscribe observes when the fetch is fufilled or data changes, it executes the function being given
      console.log(pokemon)
    })
  }

  ngOnInit() {
    this.loadPokemon();
  }
}