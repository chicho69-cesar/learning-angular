import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export class GifListComponent {
  public gifs = input.required<Gif[]>();
}
