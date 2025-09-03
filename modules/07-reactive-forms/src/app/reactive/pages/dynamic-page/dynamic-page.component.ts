import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-dynamic-page',
  standalone: false,
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {
  // public myForm = new FormGroup({
  //   favoriteGames: new FormArray([])
  // });

  public myForm!: FormGroup;
  public newFavoriteGame: FormControl = new FormControl('', Validators.required);

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.formBuilder.array([
        ['Grand Theft Auto V', Validators.required],
        ['God of War', Validators.required]
      ])
    });
  }

  public get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  public isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  public isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

  public getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required': {
          return 'Este campo es obligatorio.';
        }

        case 'minlength': {
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        }
      }
    }

    return null;
  }

  public onAddToFavorites(): void {
    if (this.newFavoriteGame.invalid) return;
    const newGame = this.newFavoriteGame.value;

    this.favoriteGames.push(
      this.formBuilder.control(newGame, Validators.required)
    );

    this.newFavoriteGame.reset();
  }

  public onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  public onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const formValue = this.myForm.value;
    console.log({ formValue });

    (this.myForm.controls['favoriteGames'] as FormArray) = this.formBuilder.array([]);
    this.myForm.reset();
  }
}
