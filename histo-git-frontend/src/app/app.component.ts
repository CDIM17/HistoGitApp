import { Component, HostBinding, OnInit } from '@angular/core';
import { Carousel, Dropdown, initTE, Collapse, Datatable } from 'tw-elements';

const data = [{}];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'histo-git-frontend';

  ngOnInit() {
    initTE({ Carousel, Dropdown, Collapse });

    const instance = new Datatable(document.getElementById('datatable'), data);
    const advancedSearchInput = document.getElementById(
      'advanced-search-input'
    )! as any;

    const search = (value: string) => {
      let [phrase, columns] = value
        .split(' in:')
        .map((str) => str.trim()) as any;

      if (columns) {
        columns = columns
          .split(',')
          .map((str: string) => str.toLowerCase().trim());
      }

      instance.search(phrase, columns);
    };

    document
      .getElementById('advanced-search-button')!
      .addEventListener('click', (e) => {
        search(advancedSearchInput.value);
      });

    advancedSearchInput.addEventListener('keydown', (e: any) => {
      if (e.keyCode === 13) {
        search(e.target.value);
      }
    });
    const btnRight = document.querySelector(
      '[data-te-datatable-pagination-right-ref]'
    )!;
    btnRight.addEventListener('click', () => {
      console.log('hola mundo', instance._options.entries);
    });
  }
}
