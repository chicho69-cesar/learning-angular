import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPage {
  constructor(
    private readonly dbzService: DbzService
  ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  public onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
