import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { ProductCardComponent } from "../../../products/components/product-card/product-card.component";
import { ProductService } from '../../../products/services/product.service';
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { PaginationService } from '../../../shared/services/pagination.service';

@Component({
  selector: 'store-home-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public productsService = inject(ProductService);
  public paginationService = inject(PaginationService);

  // public activatedRoute = inject(ActivatedRoute);

  // public currentPage = toSignal(
  //   this.activatedRoute.queryParamMap.pipe(
  //     map((params) => (params.get('page') ? +params.get('page')! : 1)),
  //     map((page) => (isNaN(page) ? 1 : page))
  //   ),
  //   {
  //     initialValue: 1,
  //   }
  // );

  public productsResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage() - 1 }),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        offset: params.page * 9,
      });
    },
  });
}
