import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes:any[] = [];

  constructor(private router:Router, private service:HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.service.getHeroes();
  }

  buscarHeroe(termino:any){
    this.router.navigate(['/heroes',termino]);
    console.log(termino);
    
  }

 

  // verHeroes(termino:string){
  //   this.router.navigate(['/heroe',termino]);
  // }

}
