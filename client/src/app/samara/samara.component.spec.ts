import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamaraComponent } from './samara.component';

describe('SamaraComponent', () => {
  let component: SamaraComponent;
  let fixture: ComponentFixture<SamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
