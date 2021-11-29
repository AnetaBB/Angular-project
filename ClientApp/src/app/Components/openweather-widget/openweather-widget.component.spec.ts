import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenweatherWidgetComponent } from './openweather-widget.component';

describe('OpenweatherWidgetComponent', () => {
  let component: OpenweatherWidgetComponent;
  let fixture: ComponentFixture<OpenweatherWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenweatherWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenweatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
