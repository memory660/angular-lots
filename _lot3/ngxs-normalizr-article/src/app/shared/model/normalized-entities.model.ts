import { NormalizedPokemonType } from '../../pokemon-type/model/normalized-pokemon-type.model';
import { NormalizedPokemon } from './../../pokemon/model/normalized-pokemon.model';

export interface NormalizedEntities {
  pokemons: { [id: number]: NormalizedPokemon };
  types: { [id: number]: NormalizedPokemonType };
}
