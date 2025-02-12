import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MemeService } from './meme.service';

describe('MemeService', () => {
  let service: MemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
