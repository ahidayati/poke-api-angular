import {PokeSprites} from "./pokeSprites";

export interface Poke{
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  sprites: Array<PokeSprites>;
}
