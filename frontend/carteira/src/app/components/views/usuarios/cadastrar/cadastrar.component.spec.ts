import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCadastrarComponent } from './cadastrar.component';

describe('CadastrarComponent', () => {
  let component: UsuarioCadastrarComponent;
  let fixture: ComponentFixture<UsuarioCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
