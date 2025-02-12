import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModificarPerfil } from './modificar-perfil.component';

describe('ModificarPerfilComponent', () => {
  let component: ModificarPerfil;
  let fixture: ComponentFixture<ModificarPerfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarPerfil,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPerfil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
