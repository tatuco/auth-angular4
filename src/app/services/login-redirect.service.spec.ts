import { TestBed, inject } from '@angular/core/testing';

import { LoginRefirectService } from './login-redirect.service';

describe('LoginRefirectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRefirectService]
    });
  });

  it('should be created', inject([LoginRefirectService], (service: LoginRefirectService) => {
    expect(service).toBeTruthy();
  }));
});
