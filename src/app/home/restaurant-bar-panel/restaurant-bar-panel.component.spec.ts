import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBarPanelComponent } from './restaurant-bar-panel.component';

describe('RestaurantBarPanelComponent', () => {
  let component: RestaurantBarPanelComponent;
  let fixture: ComponentFixture<RestaurantBarPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantBarPanelComponent]
    });
    fixture = TestBed.createComponent(RestaurantBarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
