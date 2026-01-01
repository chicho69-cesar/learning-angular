import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroTextColorPipe'
})
export class HeroTextColorPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
