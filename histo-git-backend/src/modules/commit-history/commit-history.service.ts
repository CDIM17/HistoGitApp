import { Injectable } from '@nestjs/common';
import { BaseService } from '../../common/base/base.service';
import { CommitMapper } from './mappers/commit-history.mapper';
import { GithubApiResponse } from './interface/github-api-response.interface';
import { map } from 'rxjs';

@Injectable()
export class CommitHistoryService {
  private readonly commitMapper = new CommitMapper();

  constructor(private baseService: BaseService) {}

  findAll() {
    return this.baseService
      .fetchData('https://api.github.com/repos/CDIM17/HistoGitApp/commits')
      .pipe(
        map((data) =>
          data.map((commit: GithubApiResponse) =>
            this.commitMapper.mapFrom(commit),
          ),
        ),
      );
  }
}
