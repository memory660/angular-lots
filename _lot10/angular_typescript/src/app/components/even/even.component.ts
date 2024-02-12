import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [],
  templateUrl: './even.component.html',
  styleUrl: './even.component.scss'
})
export class EvenComponent {

  // facultatif
  // counter = input<number>();

  // obligatoire : (pas de valeur par défaut car obligatoire)
  counter = input.required<number>();

  // facultatif, valeur defaut=0, quel input ?
  price = input(0, { alias: "price", });

  // facultatif, valeur defaut=0, quel input, traitement
  price2 = input(0, {                                 // 0 : il faut une valeur par défaut car facultatif
    alias: "price2",                                  // quel input ?
    transform: (price2: number) => price2 * 100,      // traitement (ici avec transform ou faire plus loin avec computed)
  });

  // traitement
  isEven = computed(() => this.counter() % 2 === 0);
}
