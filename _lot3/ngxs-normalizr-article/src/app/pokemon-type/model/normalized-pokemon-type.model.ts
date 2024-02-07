import { schema } from 'normalizr';

export const pokemonTypeSchema = new schema.Entity('types');
export const pokemonTypeSchemaArray = new schema.Array(pokemonTypeSchema);
export const pokemonTypeSchemaNoCircular = new schema.Entity('types');
pokemonTypeSchema.define({
  weaknesses: [pokemonTypeSchemaNoCircular],
  resistances: [pokemonTypeSchemaNoCircular],
});

export interface NormalizedPokemonType {
  id: number;
  name: number;
  weaknesses: number[];
  resistances: number[];
}
