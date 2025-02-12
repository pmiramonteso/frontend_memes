import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './auth-interceptor.service';

describe('AuthInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useValue: authInterceptor, multi: true }
      ]
    });
  });

  it('should run without errors', () => {
    // No realiza ninguna verificación ni lógica, solo ejecuta la prueba sin errores
  });
});
