import { Component, inject } from '@angular/core';
import { IPlugin } from '../../models/i-plugin';
import { PLUGIN_TOKEN } from '../../tokens/plugin.token';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plugin-container',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './plugin-container.component.html',
  styleUrl: './plugin-container.component.scss'
})
export class PluginContainerComponent {
  plugins = inject<IPlugin[]>(PLUGIN_TOKEN);
}
