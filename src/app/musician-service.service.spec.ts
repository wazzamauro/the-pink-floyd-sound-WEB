import { TestBed } from '@angular/core/testing';

import { MusicianServiceService } from './musician-service.service';

describe('MusicianServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicianServiceService = TestBed.get(MusicianServiceService);
    expect(service).toBeTruthy();
  });
});
