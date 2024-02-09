import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PluginContainerComponent } from './plugins/components/plugin-container/plugin-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PluginContainerComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_injection_tokens';
}
