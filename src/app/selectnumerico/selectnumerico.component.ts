import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectnumerico',
  templateUrl: './selectnumerico.component.html'
})
export class SelectnumericoComponent implements OnInit {

  @Input() maximo:number;
  @Input() minimo:number;
  actual:number;

  ngOnInit() {
    this.actual = this.minimo;
  }

  incrementar() {
      if(this.actual <= this.maximo){
          this.actual++;
      } 
  }

  decrementar() {
      if(this.actual >= this.minimo){
          this.actual--
      }
  }

  fijar(v:number){
      if (v>=this.minimo && v<=this.maximo)
      this.actual=v;
  }


}