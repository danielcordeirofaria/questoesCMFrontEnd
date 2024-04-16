import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoUnicaComponent } from './questao-unica.component';

describe('QuestaoUnicaComponent', () => {
  let component: QuestaoUnicaComponent;
  let fixture: ComponentFixture<QuestaoUnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestaoUnicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestaoUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
