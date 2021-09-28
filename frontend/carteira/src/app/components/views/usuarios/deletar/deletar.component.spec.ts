import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarUsuarioComponent } from './deletar.component';

describe('DeletarUsuarioComponent', () => {
  let component: DeletarUsuarioComponent;
  let fixture: ComponentFixture<DeletarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
