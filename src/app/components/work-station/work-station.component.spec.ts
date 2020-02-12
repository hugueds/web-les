import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStationComponent } from './work-station.component';

describe('WorkStationComponent', () => {
  let component: WorkStationComponent;
  let fixture: ComponentFixture<WorkStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
