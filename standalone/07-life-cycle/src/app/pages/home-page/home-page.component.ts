import { AfterContentChecked, AfterContentInit, afterEveryRender, afterNextRender, afterRenderEffect, AfterViewChecked, AfterViewInit, Component, DoCheck, effect, OnChanges, OnDestroy, OnInit, signal } from '@angular/core';

import { TitleComponent } from '../../components/title/title.component';
import { log } from '../../utils/logger.util';

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public traditionalProperty: string = 'Cesar';
  public signalProperty = signal('Cesar');

  constructor() {
    log('Constructor called');

    // setTimeout(() => {
    //   this.signalProperty.set('Liz Sandoval');
    // }, 2000);
  }

  public changeTraditional() {
    this.traditionalProperty = 'Cesar Villalobos Olmos';
  }

  public changeSignal() {
    this.signalProperty.set('Cesar Villalobos Olmos');
  }

  // ========== Lifecycle Hooks ==========
  // Se dispara cuando una señal cambia de valor
  public basicEffect = effect((onCleanup) => {
    log('effect', 'Called side effect due to signal change');

    onCleanup(() => {
      log('onCleanup', 'Called cleanup before re-running the effect or destroying it');
    });
  });

  // Se dispara una vez que el componente es creado
  public ngOnInit() {
    log(
      'ngOnInit',
      "Runs once after Angular has initialized all the component's inputs."
    );
  }

  // Se dispara cada vez que una propiedad de entrada cambia
  public ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.");
  }

  // Se dispara cada vez que el componente es verificado para cambios
  public ngDoCheck() {
    log('ngDoCheck', 'Runs every time this component is checked for changes.');
  }

  // Se dispara una vez que el contenido del componente ha sido inicializado
  public ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "Runs once after the component's content has been initialized."
    );
  }

  // Se dispara cada vez que el contenido del componente es verificado para cambios
  public ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Runs every time this component content has been checked for changes.'
    );
  }

  // Se dispara una vez que la vista del componente ha sido inicializada
  public ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "Runs once after the component's view has been initialized."
    );
  }

  // Se dispara cada vez que la vista del componente es verificada para cambios
  public ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      "Runs every time the component's view has been checked for changes."
    );
  }

  // Se dispara una vez antes de que el componente sea destruido
  public ngOnDestroy() {
    log('ngOnDestroy', '	Runs once before the component is destroyed.');
  }

  // Se dispara una vez que todos los componentes han sido renderizados en el DOM
  public myAfterNextRender = afterNextRender(() => {
    log(
      'afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    );
  });

  // Se dispara cada vez que todos los componentes han sido renderizados en el DOM
  public myAfterRenderEffect = afterRenderEffect(() => {
    log(
      'afterRenderEffect',
      'Runs every time all components have been rendered to the DOM.'
    );
  });

  // Se dispara después de cada renderizado del componente
  public myAfterEveryRender = afterEveryRender(() => {
    log(
      'afterEveryRender',
      'Runs after every render of the component.'
    );
  });
}
