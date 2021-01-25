import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDispAreaComponent } from './main-disp-area.component';

describe('MainDispAreaComponent', () => {
  let component: MainDispAreaComponent;
  let fixture: ComponentFixture<MainDispAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDispAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDispAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
