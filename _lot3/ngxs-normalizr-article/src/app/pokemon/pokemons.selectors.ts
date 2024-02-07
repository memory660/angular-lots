import { Selector } from '@ngxs/store';
import { denormalize } from 'normalizr';

import { NormalizedPokemonType } from '../pokemon-type/model/normalized-pokemon-type.model';
import { PokemonTypesSelectors } from '../pokemon-type/pokemon-types.selectors';
import { NormalizedEntities } from '../shared/model/normalized-entities.model';
import { pokemonArraySchema } from './model/normalized-pokemon.model';
import { PokemonModel } from './model/pokemon.model';
import { PokemonsState, PokemonStateModel } from './pokemons.state';

export class PokemonSelectors {
  @Selector([PokemonsState, PokemonTypesSelectors.normalizedPokemonTypes])
  static pokemons(
    state: PokemonStateModel,
    normalizedTypes: { [id: number]: NormalizedPokemonType }
  ): PokemonModel[] | null {
    console.log(normalizedTypes);
    if (state.pokemons.byId == null) {
      return null;
    }
    const entities: NormalizedEntities = {
      pokemons: state.pokemons.byId,
      types: normalizedTypes,
    };
    return denormalize(state.pokemons.allIds, pokemonArraySchema, entities);
  }
}
