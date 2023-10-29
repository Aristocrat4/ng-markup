import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyofferComponent } from './dailyoffer.component';

describe('DailyofferComponent', () => {
  let component: DailyofferComponent;
  let fixture: ComponentFixture<DailyofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyofferComponent]
    });
    fixture = TestBed.createComponent(DailyofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
