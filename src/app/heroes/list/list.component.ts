import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string [] = ['Hulk','Spiderman','Venom','Iron Man','Captain America',];
  public deletedHeroe?: string;

  removeLastHero(): void{
    this.deletedHeroe = this.heroNames.pop();
  }
}
