import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { MaterialService } from './shared/providers/material/material.service';
import { MDCComponent } from '@material/base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'wedoogift';
  mdcComponents: MDCComponent<any>[] = [] as MDCComponent<any>[];

  constructor(
    private element: ElementRef,
    private materialService: MaterialService,
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mdcComponents = this.materialService.initialize(this.element);
    });
  }
}
