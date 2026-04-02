import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { ProductService } from '../../../products/services/product.service';
import { ProductDetailsComponent } from "../../components/product-details/product-details.component";

@Component({
  selector: 'dashboard-product-admin-page',
  imports: [ProductDetailsComponent],
  templateUrl: './product-admin-page.component.html',
  styleUrl: './product-admin-page.component.css'
})
export class ProductAdminPageComponent {
  public activatedRoute = inject(ActivatedRoute);
  public router = inject(Router);
  public productsService = inject(ProductService);

  public productId = toSignal(
    this.activatedRoute.params.pipe(map((params) => params['id']))
  );

  public productResource = rxResource({
    params: () => ({ id: this.productId() }),
    stream: ({ params }) => {
      return this.productsService.getProductById(params.id);
    },
  });

  public redirectEffect = effect(() => {
    if (this.productResource.error()) {
      this.router.navigate(['/admin/products']);
    }
  });
}
