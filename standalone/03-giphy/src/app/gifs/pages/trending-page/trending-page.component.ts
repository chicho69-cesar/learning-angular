import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { ScrollStateService } from '../../../ui/services/scroll-state.service';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css'
})
export default class TrendingPageComponent implements AfterViewInit {
  public gifService = inject(GifsService);
  public scrollStateService = inject(ScrollStateService);

  public scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  public ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  public onScroll(event: Event): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtTheBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtTheBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
