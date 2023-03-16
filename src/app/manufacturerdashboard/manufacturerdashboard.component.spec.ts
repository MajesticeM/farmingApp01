import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerdashboardComponent } from './manufacturerdashboard.component';

describe('ManufacturerdashboardComponent', () => {
  let component: ManufacturerdashboardComponent;
  let fixture: ComponentFixture<ManufacturerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturerdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
