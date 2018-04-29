import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerletekComponent } from './berletek.component';

describe('BerletekComponent', () => {
  let component: BerletekComponent;
  let fixture: ComponentFixture<BerletekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerletekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerletekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
