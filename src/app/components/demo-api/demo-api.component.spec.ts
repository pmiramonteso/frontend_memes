import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemoApiComponent } from './demo-api.component';

describe('DemoApiComponent', () => {
  let component: DemoApiComponent;
  let fixture: ComponentFixture<DemoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoApiComponent,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
