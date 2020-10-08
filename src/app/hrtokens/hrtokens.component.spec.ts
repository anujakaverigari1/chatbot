import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrtokensComponent } from './hrtokens.component';

describe('HrtokensComponent', () => {
  let component: HrtokensComponent;
  let fixture: ComponentFixture<HrtokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrtokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrtokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
