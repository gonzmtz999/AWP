import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any={};
  @Input() index:any;

  @Output() heroeSeleccionado: EventEmitter<any>;
  // @Output() heroeSeleccionado: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router) {
    this.heroeSeleccionado= new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.heroeSeleccionado.emit(this.index)
    // this.router.na vigate(['/heroe',this.index]);
  }

  

}
