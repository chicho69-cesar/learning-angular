import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroColorPipe'
})
export class HeroColorPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
