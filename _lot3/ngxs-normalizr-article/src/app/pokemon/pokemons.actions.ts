import { NormalizedEntities } from '../shared/model/normalized-entities.model';

export class GetPokemons {
  static readonly type = '[Pokemons] GetPokemons';
}

export class GetPokemonsSuccess {
  static readonly type = '[Pokemons] GetPokemonsSuccess';
  constructor(public payload: { entities: NormalizedEntities }) {}
}
