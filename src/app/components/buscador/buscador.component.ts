import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: any = {};
  termino: any;

  constructor(private activatedRoute: ActivatedRoute, private service: HeroesService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.service.buscarHeroes(params['termino']);
      console.log();
      
    })
  }

  verHeroe(idx: any) {
    this.router.navigate(['/heroe', idx]);
  }



}
