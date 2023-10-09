import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CommitHistoryService {
  private readonly BASE_URL =
    'https://api.github.com/repos/CDIM17/HistoGitApp/commits';

  constructor(private baseService: BaseService) {}

  getCommits(): Observable<any> {
    return this.baseService.get(this.BASE_URL);
  }
}
