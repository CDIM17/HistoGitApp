import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitHistoryComponent } from './pages/commit-history/commit-history.component';

const routes: Routes = [
  {
    path: '',
    component: CommitHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
