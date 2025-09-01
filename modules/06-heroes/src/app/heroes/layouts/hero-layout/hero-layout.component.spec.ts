import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLayoutComponent } from './hero-layout.component';

describe('HeroLayoutComponent', () => {
  let component: HeroLayoutComponent;
  let fixture: ComponentFixture<HeroLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
