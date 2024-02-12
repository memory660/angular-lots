import { Component, input } from '@angular/core';

@Component({
  selector: 'app-comp-for-route',
  standalone: true,
  imports: [],
  templateUrl: './comp-for-route.component.html',
  styleUrl: './comp-for-route.component.scss'
})
export class CompForRouteComponent {
  id = input.required<number>();
}
