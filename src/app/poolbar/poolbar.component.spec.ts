import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolbarComponent } from './poolbar.component';

describe('PoolbarComponent', () => {
  let component: PoolbarComponent;
  let fixture: ComponentFixture<PoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
