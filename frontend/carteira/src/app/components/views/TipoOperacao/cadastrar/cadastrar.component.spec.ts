import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOperacaoCadastrarComponent } from './cadastrar.component';

describe('CadastrarComponent', () => {
  let component: TipoOperacaoCadastrarComponent;
  let fixture: ComponentFixture<TipoOperacaoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoOperacaoCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOperacaoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
