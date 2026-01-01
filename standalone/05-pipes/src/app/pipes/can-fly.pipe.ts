import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyPipe'
})
export class CanFlyPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
