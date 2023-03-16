import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSupportChatComponent } from './live-support-chat.component';

describe('LiveSupportChatComponent', () => {
  let component: LiveSupportChatComponent;
  let fixture: ComponentFixture<LiveSupportChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveSupportChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSupportChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
