import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroFilterPipe'
})
export class HeroFilterPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
