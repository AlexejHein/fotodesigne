import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WabenComponent } from './waben.component';

describe('WabenComponent', () => {
  let component: WabenComponent;
  let fixture: ComponentFixture<WabenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WabenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
