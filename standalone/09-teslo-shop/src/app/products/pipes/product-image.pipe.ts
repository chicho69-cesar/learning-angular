import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productImagePipe'
})
export class ProductImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
