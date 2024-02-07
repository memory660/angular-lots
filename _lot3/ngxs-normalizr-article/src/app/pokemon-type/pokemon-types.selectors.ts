import { Selector } from '@ngxs/store';

import { NormalizedPokemonType } from './model/normalized-pokemon-type.model';
import { PokemonTypesState, PokemonTypeStateModel } from './pokemon-types.state';

export class PokemonTypesSelectors {
  @Selector([PokemonTypesState])
  static normalizedPokemonTypes(
    state: PokemonTypeStateModel
  ): { [id: number]: NormalizedPokemonType } {
    console.log(state.pokemonTypes.byId);
    return state.pokemonTypes.byId;
  }
}
