import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBarComponent } from './services-bar.component';

describe('ServicesBarComponent', () => {
  let component: ServicesBarComponent;
  let fixture: ComponentFixture<ServicesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
