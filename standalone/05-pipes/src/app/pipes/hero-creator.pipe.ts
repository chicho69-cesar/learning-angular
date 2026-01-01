import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroCreator'
})
export class HeroCreatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
