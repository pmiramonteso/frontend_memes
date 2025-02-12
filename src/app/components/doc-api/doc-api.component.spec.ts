import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DocApiComponent } from './doc-api.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DocApiComponent', () => {
  let component: DocApiComponent;
  let fixture: ComponentFixture<DocApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocApiComponent,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: '123' }
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
