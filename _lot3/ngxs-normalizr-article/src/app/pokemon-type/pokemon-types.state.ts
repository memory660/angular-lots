import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import * as _ from 'lodash';

import { GetPokemonsSuccess } from '../pokemon/pokemons.actions';
import { ApiService } from '../shared/services/api.service';
import { NormalizedPokemonType } from './model/normalized-pokemon-type.model';

export interface PokemonTypeStateModel {
  pokemonTypes: {
    byId: { [id: number]: NormalizedPokemonType };
    allIds: number[];
  };
}

@State<PokemonTypeStateModel>({
  name: 'pokemonTypes',
  defaults: {
    pokemonTypes: {
      byId: null,
      allIds: [],
    },
  },
})
@Injectable()
export class PokemonTypesState {
  constructor(private readonly apiService: ApiService) {}

  @Action(GetPokemonsSuccess)
  getPokemonsSuccess(
    ctx: StateContext<PokemonTypeStateModel>,
    action: GetPokemonsSuccess
  ): void {
    const normalizedPokemonTypes = action.payload.entities.types;
    ctx.setState(
      produce((draft: PokemonTypeStateModel) => {
        draft.pokemonTypes = {
          byId: {
            ...draft.pokemonTypes.byId,
            ...normalizedPokemonTypes,
          },
          allIds: _.union(
            draft.pokemonTypes.allIds,
            Object.keys(normalizedPokemonTypes)
          ),
        };
      })
    );
  }
}
