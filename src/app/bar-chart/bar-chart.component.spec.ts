import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBarChartComponent } from './component-bar-chart.component';

describe('ComponentBarChartComponent', () => {
  let component: ComponentBarChartComponent;
  let fixture: ComponentFixture<ComponentBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
