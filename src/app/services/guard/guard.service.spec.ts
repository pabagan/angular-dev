import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { 
  AuthenticationService, 
  GuardService 
} from '../';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

describe('GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        GuardService,
        AuthenticationService
      ]
    });
  });

  it('should create', inject([GuardService], (service: GuardService) => {
    expect(service).toBeTruthy();
  }));

});

