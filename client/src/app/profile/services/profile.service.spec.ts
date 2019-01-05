import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ 
      provide: HttpClient, 
      useValue: { get: () => {} } 
    }],
  }));

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });
});
