import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gif-history-page',
  imports: [GifListComponent],
  templateUrl: './gif-history-page.component.html',
  styleUrl: './gif-history-page.component.css'
})
export default class GifHistoryPageComponent {
  public gifService = inject(GifsService);

  public query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query']),
    )
  );

  public gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
