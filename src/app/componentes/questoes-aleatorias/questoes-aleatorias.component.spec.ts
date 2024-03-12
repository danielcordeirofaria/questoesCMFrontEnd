import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestoesAleatoriasComponent } from './questoes-aleatorias.component';

describe('QuestoesAleatoriasComponent', () => {
  let component: QuestoesAleatoriasComponent;
  let fixture: ComponentFixture<QuestoesAleatoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestoesAleatoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestoesAleatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
