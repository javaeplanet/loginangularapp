import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincredComponent } from './logincred.component';

describe('LogincredComponent', () => {
  let component: LogincredComponent;
  let fixture: ComponentFixture<LogincredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
