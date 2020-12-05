import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancehomepageComponent } from './insurancehomepage.component';

describe('InsurancehomepageComponent', () => {
  let component: InsurancehomepageComponent;
  let fixture: ComponentFixture<InsurancehomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancehomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
