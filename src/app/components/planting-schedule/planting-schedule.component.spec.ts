import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantingScheduleComponent } from './planting-schedule.component';

describe('PlantingScheduleComponent', () => {
  let component: PlantingScheduleComponent;
  let fixture: ComponentFixture<PlantingScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantingScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
