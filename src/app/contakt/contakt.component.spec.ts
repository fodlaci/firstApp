import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaktComponent } from './contakt.component';

describe('ContaktComponent', () => {
  let component: ContaktComponent;
  let fixture: ComponentFixture<ContaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
