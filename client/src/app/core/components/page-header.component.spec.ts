import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mat-card-title have a title', () => {
    component.title = 'Title';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('mat-card-title');
    expect(compiled.textContent).toEqual('Title');
  });

  it('should mat-card-subtitle have a subtitle', () => {
    component.subtitle = 'Subtitle';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('mat-card-subtitle');
    expect(compiled.textContent).toEqual('Subtitle');
  });

  it('should not find mat-card-subtitle if there is no subtitle', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('mat-card-subtitle');
    expect(compiled).toBe(null);
  });
});
