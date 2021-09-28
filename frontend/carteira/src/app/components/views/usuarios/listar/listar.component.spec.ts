import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListarComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: UsuarioListarComponent;
  let fixture: ComponentFixture<UsuarioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
