import { AfterViewInit, Component, ElementRef, input, OnChanges, SimpleChanges, viewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { ProductImagePipe } from '../../pipes/product-image.pipe';

@Component({
  selector: 'products-product-carousel',
  imports: [ProductImagePipe],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.css',
  styles: `
    .swiper {
      width: 100%;
      height: 500px;
    }
  `
})
export class ProductCarouselComponent implements OnChanges, AfterViewInit {
  public images = input.required<string[]>();
  public swiperDiv = viewChild.required<ElementRef>('swiperDiv');

  public swiper: Swiper | undefined = undefined;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'].firstChange) {
      return;
    }

    if (!this.swiper) {
      return;
    }

    this.swiper.destroy(true, true);

    const paginationEl: HTMLDivElement = this.swiperDiv().nativeElement?.querySelector('.swiper-pagination');
    paginationEl.innerHTML = '';

    setTimeout(() => {
      this.swiperInit();
    }, 100);
  }

  public ngAfterViewInit(): void {
    this.swiperInit();
  }

  public swiperInit() {
    const element = this.swiperDiv().nativeElement;
    if (!element) return;

    this.swiper = new Swiper(element, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      modules: [Navigation, Pagination],

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
