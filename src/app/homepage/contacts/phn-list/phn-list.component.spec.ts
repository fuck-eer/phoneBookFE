import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhnListComponent } from './phn-list.component';

describe('PhnListComponent', () => {
  let component: PhnListComponent;
  let fixture: ComponentFixture<PhnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhnListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
