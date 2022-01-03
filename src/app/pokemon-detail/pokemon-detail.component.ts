import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokeName: string | null = null;
  eachPoke: any;

  constructor(
    public pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{
      this.pokeName = param.name;
    });
    this.pokemonService.getEachPokemonX(this.pokeName).subscribe(poke =>{
      this.eachPoke = poke;
    })
  }

}
