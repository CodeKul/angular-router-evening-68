import { TestBed, async, inject } from '@angular/core/testing';

import { AccountNumGuard } from './account-num.guard';

describe('AccountNumGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountNumGuard]
    });
  });

  it('should ...', inject([AccountNumGuard], (guard: AccountNumGuard) => {
    expect(guard).toBeTruthy();
  }));
});
