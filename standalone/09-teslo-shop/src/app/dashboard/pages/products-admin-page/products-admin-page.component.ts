import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { ProductTableComponent } from "../../../products/components/product-table/product-table.component";
import { ProductService } from '../../../products/services/product.service';
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { PaginationService } from '../../../shared/services/pagination.service';

@Component({
  selector: 'dashboard-products-admin-page',
  imports: [PaginationComponent, ProductTableComponent],
  templateUrl: './products-admin-page.component.html',
  styleUrl: './products-admin-page.component.css'
})
export class ProductsAdminPageComponent {
  public productsService = inject(ProductService);
  public paginationService = inject(PaginationService);

  public productsPerPage = signal(10);

  public productsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage() - 1,
      limit: this.productsPerPage(),
    }),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        offset: params.page * 9,
        limit: params.limit,
      });
    },
  });
}
