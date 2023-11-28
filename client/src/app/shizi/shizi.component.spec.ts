import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiziComponent } from './shizi.component';

describe('ShiziComponent', () => {
  let component: ShiziComponent;
  let fixture: ComponentFixture<ShiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
