import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import * as _ from 'lodash';
import { normalize } from 'normalizr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { NormalizedEntities } from '../shared/model/normalized-entities.model';
import { ApiService } from '../shared/services/api.service';
import { NormalizedPokemon, pokemonArraySchema } from './model/normalized-pokemon.model';
import { PokemonModel } from './model/pokemon.model';
import { GetPokemons, GetPokemonsSuccess } from './pokemons.actions';

export interface PokemonStateModel {
  pokemons: {
    byId: { [id: number]: NormalizedPokemon };
    allIds: number[];
  };
}

@State<PokemonStateModel>({
  name: 'pokemons',
  defaults: {
    pokemons: {
      byId: null,
      allIds: [],
    },
  },
})
@Injectable()
export class PokemonsState {
  constructor(private readonly apiService: ApiService) {}

  @Action(GetPokemons)
  getPokemons(
    ctx: StateContext<PokemonStateModel>,
    action: GetPokemons
  ): Observable<PokemonModel[]> {
    return this.apiService.getPokemons().pipe(
      tap((pokemons: PokemonModel[]) => {
        const entities = this.normalizePokemons(ctx, pokemons);
        ctx.dispatch(new GetPokemonsSuccess({ entities }));
      })
    );
  }

  @Action(GetPokemonsSuccess)
  getPokemonsSuccess(
    ctx: StateContext<PokemonStateModel>,
    action: GetPokemonsSuccess
  ): void {
    const normalizedPokemons = action.payload.entities.pokemons;
    ctx.setState(
      produce((draft: PokemonStateModel) => {
        draft.pokemons = {
          byId: {
            ...draft.pokemons.byId,
            ...normalizedPokemons,
          },
          allIds: _.union(
            draft.pokemons.allIds,
            Object.keys(normalizedPokemons)
          ),
        };
      })
    );
  }

  normalizePokemons(
    ctx: StateContext<PokemonStateModel>,
    pokemons: PokemonModel[]
  ): NormalizedEntities {
    const normalizedData = normalize<any, NormalizedEntities>(
      pokemons,
      pokemonArraySchema
    );
    return normalizedData.entities;
  }
}
