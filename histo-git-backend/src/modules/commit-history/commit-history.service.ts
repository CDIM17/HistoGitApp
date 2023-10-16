import { Injectable } from '@nestjs/common';
import { BaseService } from '../../common/base/base.service';
import { CommitMapper } from './mappers/commit-history.mapper';
import { GithubApiResponse } from './interface/github-api-response.interface';
import { map } from 'rxjs';
import { Environment } from 'src/config/models/environment.model';
import environment from 'src/config/environment/environment';
import { ApiConfig } from 'src/config/models/api-config.model';

const { apiConfig }: Environment = environment();
const { apiUrl }: ApiConfig = apiConfig;

@Injectable()
export class CommitHistoryService {
  private readonly commitMapper = new CommitMapper();

  constructor(private baseService: BaseService) {}

  findAll() {
    return this.baseService
      .fetchData(`${apiUrl}/commits`)
      .pipe(
        map((data) =>
          data.map((commit: GithubApiResponse) =>
            this.commitMapper.mapFrom(commit),
          ),
        ),
      );
  }
}
