import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseService } from './base.service';
import {
  CommitHistory,
  CommitHistoryResponseApi,
} from '../interfaces/commit-history.interface';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class CommitHistoryService {
  constructor(private baseService: BaseService) {}

  getCommitHistory(): Observable<CommitHistory[]> {
    return this.baseService
      .get<CommitHistoryResponseApi>(BASE_URL)
      .pipe(map((response) => response.data));
  }
}
