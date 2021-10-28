import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getPokemon(limitNb: number, offsetNb: number){
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?limit=${limitNb}&offset=${offsetNb}`);
  }

  getEachPokemon(name: string){
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}
