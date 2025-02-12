import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavegacionComponent } from './navegacion.component';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('NavegacionComponent', () => {
  let component: NavegacionComponent;
  let fixture: ComponentFixture<NavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacionComponent, 
        HttpClientTestingModule,
        RouterTestingModule],
        providers: [AuthService,
          { 
            provide: ActivatedRoute, 
            useValue: { snapshot: { paramMap: of({}) } }
          }
        ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
