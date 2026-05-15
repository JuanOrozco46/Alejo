import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorColoresComponent } from './selector-colores.component';

describe('SelectorColoresComponent', () => {
  let component: SelectorColoresComponent;
  let fixture: ComponentFixture<SelectorColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectorColoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
