import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PokemonModel } from 'src/app/pokemon/model/pokemon.model';

import pokemons from './pokemon-response-mock';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getPokemons(): Observable<PokemonModel[]> {
    return of(pokemons);
  }
}
