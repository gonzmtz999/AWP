import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  

  constructor(private service : HeroesService,private router:Router) { 

  }

  ngOnInit(): void {
    this.heroes = this.service.getHeroes();
  }


  // esto se usa si se quiere usar un boton para redireccionar de acuerdo a un id
  verHeroe(idx:number){
    this.router.navigate(['heroe',idx]);
    // this.router.navigate(['heroe',idx]);
  }

}
