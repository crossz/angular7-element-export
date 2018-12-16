import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsaCounterComponent } from './jsa-counter.component';

describe('JsaCounterComponent', () => {
  let component: JsaCounterComponent;
  let fixture: ComponentFixture<JsaCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsaCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsaCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
