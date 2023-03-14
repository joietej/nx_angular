import { Component } from '@angular/core';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'fake-store';
  sidenavOpened = false;

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
