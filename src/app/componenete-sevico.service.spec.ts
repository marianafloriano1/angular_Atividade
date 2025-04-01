import { TestBed } from '@angular/core/testing';

import { ComponeneteSevicoService } from './componenete-sevico.service';

describe('ComponeneteSevicoService', () => {
  let service: ComponeneteSevicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponeneteSevicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
