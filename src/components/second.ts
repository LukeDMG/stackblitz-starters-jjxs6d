import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Second Page</h2>
  `,
})
export class SecondComponent {
}