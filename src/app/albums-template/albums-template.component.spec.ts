import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsTemplateComponent } from './albums-template.component';

describe('AlbumsTemplateComponent', () => {
  let component: AlbumsTemplateComponent;
  let fixture: ComponentFixture<AlbumsTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsTemplateComponent]
    });
    fixture = TestBed.createComponent(AlbumsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
