import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectReqComponent } from './connect-req.component';

describe('ConnectReqComponent', () => {
  let component: ConnectReqComponent;
  let fixture: ComponentFixture<ConnectReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
