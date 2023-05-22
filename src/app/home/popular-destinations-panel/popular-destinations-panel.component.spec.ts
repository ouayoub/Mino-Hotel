import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDestinationsPanelComponent } from './popular-destinations-panel.component';

describe('PopularDestinationsPanelComponent', () => {
  let component: PopularDestinationsPanelComponent;
  let fixture: ComponentFixture<PopularDestinationsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularDestinationsPanelComponent]
    });
    fixture = TestBed.createComponent(PopularDestinationsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
