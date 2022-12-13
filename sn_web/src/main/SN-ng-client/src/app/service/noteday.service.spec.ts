import { TestBed } from '@angular/core/testing';
import { NotedayService } from './noteday.service';


describe('NotedayService', () => {
  let service: NotedayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotedayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
