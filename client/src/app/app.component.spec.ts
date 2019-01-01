import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromAuth from './auth/reducers';
import { Logout, AutoLogin } from './auth/actions/auth.actions';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let store: Store<fromAuth.State>;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          auth: combineReducers(fromAuth.reducers),
        }),
      ],
      declarations: [
        AppComponent,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.get(Store);
    
    spyOn(store, 'dispatch').and.callThrough();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render a router-outlet', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeDefined();
  });
  
  it('should dispatch a login action on submit', () => {
    const action = new Logout();
    const app = fixture.debugElement.componentInstance;
    app.logout();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
  
  it('should dispatch an AutoLogin action on init', () => {
    expect(store.dispatch).not.toHaveBeenCalled();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new AutoLogin());
  });
});
