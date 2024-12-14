import { Component } from '@angular/core';
import { TemplateComponent } from './template/template.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
