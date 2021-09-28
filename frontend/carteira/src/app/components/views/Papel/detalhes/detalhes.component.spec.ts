import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelDetalhesComponent } from './detalhes.component';

describe('DetalhesComponent', () => {
  let component: PapelDetalhesComponent;
  let fixture: ComponentFixture<PapelDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapelDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapelDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
