import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductCarouselComponent } from "../../../products/components/product-carousel/product-carousel.component";
import { ProductService } from '../../../products/services/product.service';

@Component({
  selector: 'store-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  public activatedRoute = inject(ActivatedRoute);
  public productsService = inject(ProductService);

  public idSlug = this.activatedRoute.snapshot.params['idSlug'];

  public productResource = rxResource({
    params: () => ({ idSlug: this.idSlug }),
    stream: ({ params }) => {
      return this.productsService.getProductByIdSlug(params.idSlug);
    },
  });
}
