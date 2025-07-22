import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [],
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.css'
})
export class QueriesComponent {
  public h1 = viewChild<ElementRef<HTMLHeadingElement>>("title");
  public h2 = viewChild.required<ElementRef<HTMLHeadingElement>>("subtitle");
  public onlyRead = viewChildren<ElementRef<HTMLHeadingElement>>("onlyRead");

  ngAfterViewInit() {
    this.h2().nativeElement.textContent = "Nuevo Valor asignado al subtitulo";
    console.log(this.h1()?.nativeElement);
    console.log(this.h2()?.nativeElement);
    
    console.log(this.onlyRead());
  }
}
