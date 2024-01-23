import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscritionFormComponent } from './subscrition-form.component';

describe('SubscritionFormComponent', () => {
  let component: SubscritionFormComponent;
  let fixture: ComponentFixture<SubscritionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscritionFormComponent]
    });
    fixture = TestBed.createComponent(SubscritionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
