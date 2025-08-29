import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  imports: [],
  templateUrl: './mon-composant.html',
  styleUrl: './mon-composant.scss'
})
export class MonComposant {

  add(a : number, b : number){
    return a + b
  }

}
