import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

console.log(uuid());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Bills",
      power: 25000000
    }
  ];

  constructor() { }

  addCharacter(char: Character): void{

    const newCharacter: Character ={id: uuid(),...char}

    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(index: number): void
  //const deleteds: Character[] = this.characters.splice(index,1);
  onDeleteCharacterById(id: string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
