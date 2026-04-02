import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { ProductCardComponent } from "../../../products/components/product-card/product-card.component";
import { ProductService } from '../../../products/services/product.service';
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { PaginationService } from '../../../shared/services/pagination.service';

@Component({
  selector: 'store-gender-page',
  imports: [PaginationComponent, ProductCardComponent],
  templateUrl: './gender-page.component.html',
  styleUrl: './gender-page.component.css'
})
export class GenderPageComponent {
  public route = inject(ActivatedRoute);
  public productsService = inject(ProductService);
  public paginationService = inject(PaginationService);

  public gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));

  public productsResource = rxResource({
    params: () => ({
      gender: this.gender(),
      page: this.paginationService.currentPage() - 1,
    }),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        gender: params.gender,
        offset: params.page * 9,
      });
    },
  });
}
