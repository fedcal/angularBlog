import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommenntListComponent } from './commennt-list.component';

describe('CommenntListComponent', () => {
  let component: CommenntListComponent;
  let fixture: ComponentFixture<CommenntListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommenntListComponent]
    });
    fixture = TestBed.createComponent(CommenntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
