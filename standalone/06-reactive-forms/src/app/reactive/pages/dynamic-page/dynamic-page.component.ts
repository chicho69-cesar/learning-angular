import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormUtils } from '../../../utils/form.utils';

@Component({
  selector: 'reactive-dynamic-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {
  private fb = inject(FormBuilder);
  public formUtils = FormUtils;

  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoritesGames: this.fb.array(
      [
        ['GTA V', Validators.required],
        ['God of War', Validators.required],
      ],
      Validators.minLength(2),
    ),
  });

  // public newFavorite = this.fb.control([])
  public newFavorite = new FormControl('', Validators.required);

  public get favorites() {
    return this.myForm.get('favoritesGames') as FormArray;
  }

  public onAddToFavorites() {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    this.favorites.push(this.fb.control(newGame, Validators.required));
    this.newFavorite.reset();
  }

  public onDeleteFavorite(index: number) {
    this.favorites.removeAt(index);
  }

  public onSubmit() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
