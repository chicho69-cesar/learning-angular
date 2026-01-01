import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCasePipe'
})
export class ToggleCasePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
