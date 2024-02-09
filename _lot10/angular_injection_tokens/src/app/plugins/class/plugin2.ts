import { IPlugin } from '../models/i-plugin';

export class Plugin2 implements IPlugin {
  name: string = 'Plugin 2';

  action: () => void = () => {
    alert('hello Plugin 2');
  }
}
