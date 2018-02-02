import { TestBed, inject } from '@angular/core/testing';

import { ProductGardService } from './product-gard.service';

describe('ProductGardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGardService]
    });
  });

  it('should be created', inject([ProductGardService], (service: ProductGardService) => {
    expect(service).toBeTruthy();
  }));
});
