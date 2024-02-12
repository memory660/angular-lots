import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { distinctUntilChanged, shareReplay, switchMap } from 'rxjs';
import { EvenComponent } from './components/even/even.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EvenComponent, RouterLink,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  journey: Journey | undefined = undefined;

  constructor() {

    // typescript -----------------------------------------------------------------------------

    // Object.entries()
    const obj = { a: 1, b: 2, c: 3 };
    const entries = Object.entries(obj);
    console.log(entries);     // [["a", 1], ["b", 2], ["c", 3]]

    // Object.fromEntries()
    const entries2 = [["a", 1], ["b", 2], ["c", 3]];
    const obj2 = Object.fromEntries(entries2);
    console.log(obj2);        // { a: 1, b: 2, c: 3 }

    // Array.of()
    const arr1 = Array.of(1, 2, 3);
    console.log(arr1);        // [1, 2, 3]

    // Array.from()
    const str = 'Hello';
    const arr = Array.from(str);
    console.log(arr);         // ['H', 'e', 'l', 'l', 'o']

    const nums = [1, 2, 3, 4, 5];
    const doubled = Array.from(nums, num => num * 2);
    console.log(doubled);     // [2, 4, 6, 8, 10]

    // .at()
    const arr3 = [1, 2, 3, 4, 5];
    console.log(arr3.at(2));  // 3

    // flat()
    const arr4 = [1, [2, [3]]];
    console.log(arr4.flat()); // [1, 2, [3]]


    // Angular ---------------------------------

    // multiple subscription
    /*
      private readonly destroy$ = new Subject<void>();

      this.journeyId$.pipe(
        ...
        takeUntil(this.destroy$)
      );

      ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
      }
    */

    // vscode extensions
    /*
      file-ext-switcher
      Angular Files
      Angular Language Service
      Prettier - Code formatter
      Jest Runner
      ESLint
      Color Highlight
      Code Spell Checker
    */


  }
}




export interface Journey {
  id: number;
}
