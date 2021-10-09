import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params['id']);
    })
  }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate(['heroes']);
  }

}
