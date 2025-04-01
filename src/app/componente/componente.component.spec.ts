import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteComponent } from './componente.component';

describe('ComponenteComponent', () => {
  let component: ComponenteComponent;
  let fixture: ComponentFixture<ComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
