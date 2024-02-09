import { IPlugin } from '../models/i-plugin';

export class Plugin1 implements IPlugin {
  name: string = 'Plugin 1';

  action: () => void = () => {
    alert('hello Plugin 1');
  }
}
