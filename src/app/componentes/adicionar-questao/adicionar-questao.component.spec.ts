import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarQuestaoComponent } from './adicionar-questao.component';

describe('AdicionarQuestaoComponent', () => {
  let component: AdicionarQuestaoComponent;
  let fixture: ComponentFixture<AdicionarQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarQuestaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
