import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDetalhesComponent } from './detalhes.component';

describe('DetalhesComponent', () => {
  let component: PaisDetalhesComponent;
  let fixture: ComponentFixture<PaisDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
