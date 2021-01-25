import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnListElComponent } from './conn-list-el.component';

describe('ConnListElComponent', () => {
  let component: ConnListElComponent;
  let fixture: ComponentFixture<ConnListElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnListElComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnListElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
