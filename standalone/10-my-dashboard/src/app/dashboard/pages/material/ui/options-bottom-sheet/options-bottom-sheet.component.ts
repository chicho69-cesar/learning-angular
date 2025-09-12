import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-sheet',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './options-bottom-sheet.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class OptionsBottomSheetComponent {
  public openLink(event: MouseEvent): void {
    console.log('OPEN LINK: ', event);
  }
}
