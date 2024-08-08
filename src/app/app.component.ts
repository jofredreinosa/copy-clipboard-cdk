import { Component, inject } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private clipboard = inject(Clipboard)
  title = 'angularCdk';
  value = '';

  copyText() {
    if (!this.value.trim()) {
      alert('Nothing to copy');
      return;
    }

    this.clipboard.copy(this.value);
    alert('Copied');

  }
}
