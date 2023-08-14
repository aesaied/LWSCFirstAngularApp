import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetructCompComponent } from './detruct-comp.component';

describe('DetructCompComponent', () => {
  let component: DetructCompComponent;
  let fixture: ComponentFixture<DetructCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetructCompComponent]
    });
    fixture = TestBed.createComponent(DetructCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
