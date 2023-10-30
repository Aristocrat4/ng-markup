import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyofferComponent } from './beautyoffer.component';

describe('BeautyofferComponent', () => {
  let component: BeautyofferComponent;
  let fixture: ComponentFixture<BeautyofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyofferComponent]
    });
    fixture = TestBed.createComponent(BeautyofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
