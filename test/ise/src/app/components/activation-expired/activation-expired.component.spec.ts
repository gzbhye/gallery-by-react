import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationExpiredComponent } from './activation-expired.component';

describe('ActivationExpiredComponent', () => {
  let component: ActivationExpiredComponent;
  let fixture: ComponentFixture<ActivationExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
