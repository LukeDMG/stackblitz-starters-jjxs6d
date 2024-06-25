import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>First Page</h2>
  `,
})
export class FirstComponent {
}
