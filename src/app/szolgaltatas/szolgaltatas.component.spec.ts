import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzolgaltatasComponent } from './szolgaltatas.component';

describe('SzolgaltatasComponent', () => {
  let component: SzolgaltatasComponent;
  let fixture: ComponentFixture<SzolgaltatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzolgaltatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzolgaltatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
