import { Component } from '@angular/core';

@Component({
  selector: 'examples-basics-page',
  standalone: false,
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'cesar';
  public nameUpper: string = 'CESAR';
  public fullName: string = 'CeSar vIllALobOs OlMos';

  public customDate: Date = new Date();
}
