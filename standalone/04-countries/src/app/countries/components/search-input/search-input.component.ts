import { Component, effect, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  public placeholder = input<string>('Buscar...');
  public debounceTime = input<number>(350);
  public initialValue = input<string | undefined>();

  public value = output<string>();

  public inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  public debounceEffect = effect((onCleanUp) => {
    const query = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(query);
    }, this.debounceTime());

    onCleanUp(() => {
      clearTimeout(timeout);
    });
  });
}
