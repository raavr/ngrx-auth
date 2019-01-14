import { TestBed } from '@angular/core/testing';

import { BrowseAccountsService } from './browse-accounts.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from 'src/app/app.constant';

describe('BrowseAccountsService', () => {
  let service: BrowseAccountsService;
  let httpClient: HttpClient;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ 
      provide: HttpClient, 
      useValue: { get: () => {} } 
    }],
  }));

  beforeEach(() => {
    service = TestBed.get(BrowseAccountsService);
    httpClient = TestBed.get(HttpClient);
  })
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call httpClient.get with the specific URL', () => {
    spyOn(httpClient, 'get');
    service.getAllAccounts();

    expect(httpClient.get).toHaveBeenCalledWith(`${ENDPOINT}/accounts`);
  });
});
