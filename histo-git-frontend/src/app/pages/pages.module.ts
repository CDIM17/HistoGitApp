import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitHistoryComponent } from './commit-history/commit-history.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CommitHistoryComponent],
  imports: [CommonModule, HttpClientModule],
})
export class PagesModule {}
