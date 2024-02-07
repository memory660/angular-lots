import { schema } from 'normalizr';

import { pokemonTypeSchema } from '../../pokemon-type/model/normalized-pokemon-type.model';

export const pokemonSchema = new schema.Entity('pokemons', {
  type: pokemonTypeSchema,
});
export const pokemonArraySchema = new schema.Array(pokemonSchema);

export interface NormalizedPokemon {
  id: number;
  name: number;
  type: number;
}
