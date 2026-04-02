import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../auth/interfaces/user.interface';
import { Gender, Product, ProductsResponse } from '../interfaces/product.interface';

const baseUrl = environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

const emptyProduct: Product = {
  id: 'new',
  title: '',
  price: 0,
  description: '',
  slug: '',
  stock: 0,
  sizes: [],
  gender: Gender.Men,
  tags: [],
  images: [],
  user: {} as User,
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _http = inject(HttpClient);

  private productsCache = new Map<string, ProductsResponse>();
  private productCache = new Map<string, Product>();

  public getProducts(options: Options): Observable<ProductsResponse> {
    const { limit = 9, offset = 0, gender = '' } = options;

    const key = `${limit}-${offset}-${gender}`;

    if (this.productsCache.has(key)) {
      return of(this.productsCache.get(key)!);
    }

    return this._http
      .get<ProductsResponse>(`${baseUrl}/products`, {
        params: {
          limit: limit.toString(),
          offset: offset.toString(),
          gender
        }
      })
      .pipe(
        tap((response) => console.log('Products loaded from API', response)),
        tap((response) => this.productsCache.set(key, response)),
      );
  }

  public getProductByIdSlug(idSlug: string): Observable<Product> {
    if (this.productCache.has(idSlug)) {
      return of(this.productCache.get(idSlug)!);
    }

    return this._http
      .get<Product>(`${baseUrl}/products/${idSlug}`)
      .pipe(
        tap((product) => this.productCache.set(idSlug, product))
      );
  }

  public getProductById(id: string): Observable<Product> {
    if (id === 'new') {
      return of(emptyProduct);
    }

    if (this.productCache.has(id)) {
      return of(this.productCache.get(id)!);
    }

    return this._http
      .get<Product>(`${baseUrl}/products/${id}`)
      .pipe(
        tap((product) => this.productCache.set(id, product))
      );
  }

  public createProduct(partialProduct: Partial<Product>, imageFileList?: FileList) {
    return this._http
      .post<Product>(`${baseUrl}/products`, partialProduct)
      .pipe(
        tap((product) => this.updateProductCache(product)),
      );
  }

  public updateProduct(id: string, productLike: Partial<Product>, imageFileList?: FileList): Observable<Product> {
    const currentImages = productLike.images || [];

    return this.uploadImages(imageFileList).pipe(
      map((imageNames) => ({
        ...productLike,
        images: [...currentImages, ...imageNames],
      })),
      switchMap((updatedProduct) =>
        this._http.patch<Product>(`${baseUrl}/products/${id}`, updatedProduct)
      ),
      tap((product) => this.updateProductCache(product))
    );

    // return this.http
    //   .patch<Product>(`${baseUrl}/products/${id}`, productLike)
    //   .pipe(tap((product) => this.updateProductCache(product)));
  }

  public updateProductCache(product: Product) {
    const productId = product.id;

    this.productCache.set(productId, product);

    this.productsCache.forEach((productResponse) => {
      productResponse.products = productResponse.products.map((currentProduct) => {
        return currentProduct.id === productId ? product : currentProduct;
      });
    });
  }

  public uploadImages(images?: FileList): Observable<string[]> {
    if (!images) {
      return of([]);
    }

    const updateObservables = Array.from(images).map((imageFile) => {
      return this.uploadImage(imageFile);
    });

    return forkJoin(updateObservables)
      .pipe(
        tap((imageNames) => console.log({ imageNames })),
      );
  }

  public uploadImage(image: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', image);

    return this._http
      .post<{ fileName: string }>(`${baseUrl}/files/product`, formData)
      .pipe(map((fileResp) => fileResp.fileName));
  }
}
