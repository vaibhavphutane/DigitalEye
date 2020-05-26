import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPredictionComponent } from './dynamic-prediction.component';

describe('DynamicPredictionComponent', () => {
  let component: DynamicPredictionComponent;
  let fixture: ComponentFixture<DynamicPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
