import { Component, HostBinding, OnInit } from '@angular/core';
import { CommitHistory } from 'src/app/core/interfaces/commit-history.interface';
import { CommitHistoryService } from 'src/app/core/services/commit-history.service';
import { Carousel, Dropdown, initTE, Collapse, Datatable } from 'tw-elements';

@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.css'],
})
export class CommitHistoryComponent implements OnInit {
  commitHistory!: CommitHistory;

  constructor(private commitHistoryService: CommitHistoryService) {}

  ngOnInit() {
    initTE({ Carousel, Dropdown, Collapse });

    this.getCommitHistory();
  }

  getCommitHistory() {
    this.commitHistoryService.getCommitHistory().subscribe((serverData) => {
      const transformedData = {
        columns: [
          { label: 'ID', field: 'id' },
          { label: 'Photo', field: 'photo' },
          { label: 'Author', field: 'author' },
          { label: 'Email', field: 'email' },
          { label: 'Message', field: 'message' },
          { label: 'Date', field: 'date' },
        ],
        rows: serverData.map((item) => ({
          id: item.sha,
          photo: `<img src="https://avatars.githubusercontent.com/u/56546970?v=4''" alt="''" class="h-10 w-10 rounded-full">`,
          author: item.authorName,
          email: '@gmail.com',
          message: item.message,
          date: item.date,
        })),
      };

      new Datatable(document.getElementById('datatable'), transformedData);
    });
  }
}
