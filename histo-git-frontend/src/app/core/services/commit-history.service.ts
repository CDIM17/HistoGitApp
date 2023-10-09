import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseService } from './base.service';
import {
  CommitHistory,
  CommitHistoryResponseApi,
} from '../interfaces/commit-history.interface';

@Injectable({
  providedIn: 'root',
})
export class CommitHistoryService {
  private readonly BASE_URL = 'http://localhost:3000/api/commit-history';

  constructor(private baseService: BaseService) {}

  getCommitHistory(): Observable<CommitHistory[]> {
    return this.baseService
      .get<CommitHistoryResponseApi>(this.BASE_URL)
      .pipe(map((response) => response.data));
  }
}
