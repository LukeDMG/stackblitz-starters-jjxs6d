import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FirstComponent } from './components/first';
import { SecondComponent } from './components/second';
import { RouterModule, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FirstComponent, SecondComponent],
  template: `
    <h1>Home</h1>
    <button routerLink='/first'>First</button>
    <button routerLink='/second'>Second</button>
    <main><router-outlet/></main>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
    ]),
  ],
});
