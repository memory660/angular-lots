export interface PokemonType {
  id: number;
  name: string;
  weaknesses?: PokemonType[];
  resistances?: PokemonType[];
}
