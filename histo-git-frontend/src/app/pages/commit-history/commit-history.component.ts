import { Component, HostBinding, OnInit } from '@angular/core';
import { Carousel, Dropdown, initTE, Collapse, Datatable } from 'tw-elements';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
const data = {
  columns: [
    {
      label: 'Name',
      field: 'name',
    },
    {
      label: 'Position',
      field: 'position',
    },
    {
      label: 'Office',
      field: 'office',
    },
    {
      label: 'Age',
      field: 'age',
    },
    {
      label: 'Start date',
      field: 'start_date',
    },
    {
      label: 'Salary',
      field: 'salary',
    },
  ],
  rows: [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: '61',
      start_date: '2011/04/25',
      salary: '$320,800',
    },
    {
      name: 'Carlos Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: '61',
      start_date: '2011/04/25',
      salary: '$320,800',
    },
  ],
};

@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.css'],
})
export class CommitHistoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    initTE({ Carousel, Dropdown, Collapse });
    new Datatable(document.getElementById('datatable'), data);
  }
}
