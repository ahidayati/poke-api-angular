import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Poke} from "../../models/poke";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  arrayPokemons: any = [];
  page: number = 1;
  totalPokemons: number = 0;

  constructor(
    public pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemon(8, (this.page-1)*8).subscribe((data: any) =>{
      this.totalPokemons = data.count;
      console.log(data);
      data.results.forEach((result: Poke)=>{
        this.pokemonService.getEachPokemon(result.name).subscribe((uniqueResult: any)=>{
          this.arrayPokemons.push(uniqueResult);
          // console.log(this.arrayPokemons);
          });
      });
    });
  }
}
