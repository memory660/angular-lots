import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { PokemonModel } from './pokemon/model/pokemon.model';
import { GetPokemons } from './pokemon/pokemons.actions';
import { PokemonSelectors } from './pokemon/pokemons.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngxs-normalizr-pokemon';

  constructor(private store: Store) {}

  @Select(PokemonSelectors.pokemons) pokemons$: Observable<PokemonModel[]>;

  ngOnInit(): void {
    this.store.dispatch(new GetPokemons());
    this.pokemons$.subscribe((pokemons) => {
      console.log({ pokemons });
    });
  }
}
