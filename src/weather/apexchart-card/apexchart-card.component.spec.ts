import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexchartCardComponent } from './apexchart-card.component';

describe('ApexchartCardComponent', () => {
  let component: ApexchartCardComponent;
  let fixture: ComponentFixture<ApexchartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexchartCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexchartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
