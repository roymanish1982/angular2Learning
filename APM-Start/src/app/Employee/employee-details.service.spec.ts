import { TestBed, inject } from '@angular/core/testing';

import { EmployeeDetailsService } from './employee-details.service';

describe('EmployeeDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeDetailsService]
    });
  });

  it('should be created', inject([EmployeeDetailsService], (service: EmployeeDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
