import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productImagePipe'
})
export class ProductImagePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
