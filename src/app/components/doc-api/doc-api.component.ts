import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DemoApiComponent } from '../demo-api/demo-api.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-doc-api',
  imports: [FooterComponent, DemoApiComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './doc-api.component.html',
  styleUrl: './doc-api.component.scss'
})
export class DocApiComponent {
  categoria: string = '';
  swaggerUrl: SafeResourceUrl | undefined;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}


}
