import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSetupPageComponent } from './player-setup-page.component';

describe('PlayerSetupPageComponent', () => {
  let component: PlayerSetupPageComponent;
  let fixture: ComponentFixture<PlayerSetupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSetupPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSetupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
