import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBackdropComponent } from './page-backdrop.component';

describe('PageBackdropComponent', () => {
  let component: PageBackdropComponent;
  let fixture: ComponentFixture<PageBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBackdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
