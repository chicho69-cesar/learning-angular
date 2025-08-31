import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle',
  standalone: false
})
export class CustomTitlePipe implements PipeTransform {
  transform(fullname: string): string {
    return fullname[0].toUpperCase() + fullname.substring(1).toLowerCase();
  }
}
