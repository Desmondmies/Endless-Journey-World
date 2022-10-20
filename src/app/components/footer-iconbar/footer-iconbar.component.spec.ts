import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIconbarComponent } from './footer-iconbar.component';

describe('FooterIconbarComponent', () => {
  let component: FooterIconbarComponent;
  let fixture: ComponentFixture<FooterIconbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterIconbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterIconbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
