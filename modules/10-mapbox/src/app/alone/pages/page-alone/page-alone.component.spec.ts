import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAloneComponent } from './page-alone.component';

describe('PageAloneComponent', () => {
  let component: PageAloneComponent;
  let fixture: ComponentFixture<PageAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
