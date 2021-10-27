import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    public pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data: any) =>{
      data.results.forEach((result:any)=>{
        this.pokemonService.getDetailPokemon(result.name).subscribe((uniqueResult: any)=>{
          this.pokemons.push(uniqueResult);
          console.log(this.pokemons)
        });
      });
    });
  }

}
