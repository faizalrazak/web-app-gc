import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrubMobileComponent } from './grub-mobile.component';

describe('GrubMobileComponent', () => {
  let component: GrubMobileComponent;
  let fixture: ComponentFixture<GrubMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrubMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrubMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
