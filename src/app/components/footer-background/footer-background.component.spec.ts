import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBackgroundComponent } from './footer-background.component';

describe('FooterBackgroundComponent', () => {
  let component: FooterBackgroundComponent;
  let fixture: ComponentFixture<FooterBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
