import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css'
})
export class CharacterAddComponent {
  public name = signal('');
  public power = signal(0);

  public onNewCharacter = output<Character>();

  public addCharacter(): void {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power()
    };

    this.onNewCharacter.emit(newCharacter);
    this.resetFields();
  }

  public resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
