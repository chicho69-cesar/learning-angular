import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroSortByPipe'
})
export class HeroSortByPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
