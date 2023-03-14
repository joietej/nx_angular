import { Component, Input } from '@angular/core';

@Component({
  selector: 'myorg-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  @Input() title = '';
}
