import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { Gif } from '../../interfaces/gif.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export default class SearchPageComponent {
  public gifService = inject(GifsService);
  public gifs = signal<Gif[]>([]);

  public onSearch(query: string): void {
    this.gifService.searchGifs(query).subscribe((gifsResponse) => {
      this.gifs.set(gifsResponse);
    });
  }
}
