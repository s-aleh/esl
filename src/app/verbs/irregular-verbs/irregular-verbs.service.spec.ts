import { TestBed, inject } from '@angular/core/testing';

import { IrregularVerbsService } from './irregular-verbs.service';

describe('IrregularVerbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IrregularVerbsService]
    });
  });

  it('should be created', inject([IrregularVerbsService], (service: IrregularVerbsService) => {
    expect(service).toBeTruthy();
  }));
});
