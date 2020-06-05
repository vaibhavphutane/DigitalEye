import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseResultComponent } from './case-result.component';

describe('CaseResultComponent', () => {
  let component: CaseResultComponent;
  let fixture: ComponentFixture<CaseResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
