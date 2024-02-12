import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-comp-signal1',
  standalone: true,
  imports: [],
  templateUrl: './comp-signal1.component.html',
  styleUrl: './comp-signal1.component.scss'
})
export class CompSignal1Component {
  our_first_signal = signal<number>(0);

  // Create a signal for user authentication status
  isAuthenticated = signal(false);


  constructor() {
    console.log('signal 1 ---------------');

    this.our_first();
    console.log(' ');
    this.our_second();
    console.log(' ');
    this.our_authenticated();

  }

  our_first() {
    this.our_first_signal.set(8);
    console.log('Our first signal:', this.our_first_signal());
    // or
    this.our_first_signal.update((val) => val + 2);
    console.log('Our first signal:', this.our_first_signal());
  }

  our_second() {
    const price = signal(10);
    const quantity = signal(5);

    const totalCost = computed(() => price() * quantity());
    console.log('our_second', totalCost()); // Output: 50

    // -----------------------

    // Create a signal for the array of products
    const products = signal([
      { name: 'Product A', price: 10 },
      { name: 'Product B', price: 15 },
      { name: 'Product C', price: 20 },
    ]);
    // Create a computed signal for total value based on products
    const totalValue = computed(() =>
      products().reduce((sum, product) => sum + product.price, 0)
    );
    //reading the signal
    console.log("our_second : computed2", totalValue()); // Output: 45
  }


  our_authenticated() {
    // Create an effect to perform actions based on authentication status
    effect(() => {
      if (this.isAuthenticated()) {
        console.log('our_authenticated : User is authenticated. Redirecting to dashboard…');
        // Code to redirect to the dashboard can be added here
      } else {
        console.log('our_authenticated : User is not authenticated. Redirecting to login page…');
        // Code to redirect to the login page can be added here
      }
    });
  }

  onAuthenticated(value: boolean) {
    this.isAuthenticated.set(value);
  }
}
