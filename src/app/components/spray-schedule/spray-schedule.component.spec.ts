import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprayScheduleComponent } from './spray-schedule.component';

describe('SprayScheduleComponent', () => {
  let component: SprayScheduleComponent;
  let fixture: ComponentFixture<SprayScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprayScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprayScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
