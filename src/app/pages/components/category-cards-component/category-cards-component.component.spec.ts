import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardsComponentComponent } from './category-cards-component.component';

describe('CategoryCardsComponentComponent', () => {
  let component: CategoryCardsComponentComponent;
  let fixture: ComponentFixture<CategoryCardsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCardsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
