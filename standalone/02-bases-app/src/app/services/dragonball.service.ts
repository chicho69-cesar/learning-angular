import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

function saveToLocalStorage(characters: Character[]): void {
  localStorage.setItem('characters', JSON.stringify(characters));
}

function loadFromLocalStorage(): Character[] {
  const data = localStorage.getItem('characters');
  return data ? JSON.parse(data) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  public characters = signal<Character[]>(loadFromLocalStorage());

  public saveToLocalStorageEffect = effect(() => {
    saveToLocalStorage(this.characters());
  });

  public addCharacter(character: Character): void {
    this.characters.update((currentCharacters) => [
      ...currentCharacters,
      character,
    ]);
  }
}
