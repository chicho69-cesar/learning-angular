import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharacter } from './add-character.component';

describe('AddCharacter', () => {
  let component: AddCharacter;
  let fixture: ComponentFixture<AddCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCharacter]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddCharacter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
