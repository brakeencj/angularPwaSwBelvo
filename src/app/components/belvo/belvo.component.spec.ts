import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelvoComponent } from './belvo.component';

describe('BelvoComponent', () => {
  let component: BelvoComponent;
  let fixture: ComponentFixture<BelvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelvoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
