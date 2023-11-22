import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoProductsComponent } from './coco-products.component';

describe('CocoProductsComponent', () => {
  let component: CocoProductsComponent;
  let fixture: ComponentFixture<CocoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
