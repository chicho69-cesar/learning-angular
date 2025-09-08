import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomLabel]',
  standalone: false
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input()
  public set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input()
  public set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {
    this.htmlElement = this.elementRef;
  }

  public ngOnInit(): void {
    this.setStyle();
  }

  public setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  public setErrorMessage(): void {
    if (!this.htmlElement) return;

    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(errors);

    if (errors.length === 0) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es obligatorio';
      return;
    }

    if (errors.includes('minlength')) {
      const minLength = this._errors['minlength']?.requiredLength || 0;
      const actualLength = this._errors['minlength']?.actualLength || 0;

      this.htmlElement.nativeElement.innerText = `El valor debe tener al menos ${minLength} caracteres. Estas ingresando ${actualLength} caracteres.`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'El valor ingresado no tiene formato de correo electrónico';
      return;
    }
  }
}
