import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRespondComponent } from './hr-respond.component';

describe('HrRespondComponent', () => {
  let component: HrRespondComponent;
  let fixture: ComponentFixture<HrRespondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrRespondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrRespondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
