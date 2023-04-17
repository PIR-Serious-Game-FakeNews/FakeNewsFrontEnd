import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentItemComponent } from './continent-item.component';

describe('ContinentItemComponent', () => {
  let component: ContinentItemComponent;
  let fixture: ComponentFixture<ContinentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
