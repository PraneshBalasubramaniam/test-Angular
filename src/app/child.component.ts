import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: ` <p>{{ message }}</p> `,
})
export class ChildComponent {
  constructor() {}
  @Input() message: string = '';
}
