import { Component, OnInit } from '@angular/core';
import { CommitHistory } from 'src/app/core/interfaces/commit-history.interface';
import { CommitHistoryService } from 'src/app/core/services/commit-history.service';
import { Carousel, Dropdown, initTE, Collapse, Datatable } from 'tw-elements';

@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.css'],
})
export class CommitHistoryComponent implements OnInit {
  commitHistory!: CommitHistory[];
  columns = [
    { label: 'ID', field: 'id' },
    { label: 'Photo', field: 'photo' },
    { label: 'Author', field: 'author' },
    { label: 'Email', field: 'email' },
    { label: 'Message', field: 'message' },
    { label: 'Date', field: 'date' },
  ];

  constructor(private commitHistoryService: CommitHistoryService) {}

  ngOnInit() {
    initTE({ Carousel, Dropdown, Collapse });
    this.getCommitHistory();
  }

  getCommitHistory() {
    this.commitHistoryService
      .getCommitHistory()
      .subscribe((serverData: CommitHistory[]) => {
        this.commitHistory = serverData;
        this.updateDataTable(serverData);
      });
  }

  updateDataTable(data: CommitHistory[]) {
    const transformedData = {
      columns: this.columns,
      rows: data.map((item) => this.transformItemToRow(item)),
    };
    new Datatable(document.getElementById('datatable'), transformedData);
  }

  transformItemToRow(item: CommitHistory) {
    return {
      id: item.sha,
      photo: `<img src="${item.authorAvatar}" alt="User Avatar" class="h-10 w-10 rounded-full">`,
      author: item.authorName,
      email: item.authorEmail,
      message: item.message,
      date: item.date,
    };
  }

  searchData(value: string) {
    const filteredData = this.commitHistory.filter(
      (item) =>
        item.authorName.includes(value) ||
        item.message.includes(value) ||
        item.authorEmail.includes(value) ||
        item.date.includes(value)
    );
    this.updateDataTable(filteredData);
  }

  onSearchKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchData((event.target as HTMLInputElement).value);
    }
  }

  onSearchClick(value: string) {
    this.searchData(value);
  }
}
