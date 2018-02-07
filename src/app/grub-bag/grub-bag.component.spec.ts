import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrubBagComponent } from './grub-bag.component';

describe('GrubBagComponent', () => {
  let component: GrubBagComponent;
  let fixture: ComponentFixture<GrubBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrubBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrubBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
