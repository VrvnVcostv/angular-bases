import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 45;
  public exists: boolean = true;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{

    return `${this.name} - ${this.age}`
  }

  resetForm(): void{
    this.name = 'Iron Man';
    this.age = 45;
  }

  changeName(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 17;
  }
}
