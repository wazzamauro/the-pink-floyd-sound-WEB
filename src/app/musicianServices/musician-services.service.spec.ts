import { TestBed } from '@angular/core/testing';

import { MusicianServicesService } from './musician-services.service';

describe('MusicianServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicianServicesService = TestBed.get(MusicianServicesService);
    expect(service).toBeTruthy();
  });
});
