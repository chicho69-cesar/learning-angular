import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  public ngOnInit(): void {
    if (!this.url) {
      throw new Error('url is required');
    }
  }

  public onLoad(): void {
    this.hasLoaded = true;
  }
}
