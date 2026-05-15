import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroColorComponent } from './cuadro-color.component';

describe('CuadroColorComponent', () => {
  let component: CuadroColorComponent;
  let fixture: ComponentFixture<CuadroColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuadroColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
