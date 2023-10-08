import { Mapper } from '../../../common/mappers/mapper';
import { CommitHistoryDto } from '../dto/commit-history.dto';
import { GithubApiResponse } from '../interface/github-api-response.interface';

export class CommitMapper extends Mapper<GithubApiResponse, CommitHistoryDto> {
  mapFrom(param: GithubApiResponse): CommitHistoryDto {
    return {
      sha: param.sha,
      message: param.commit.message,
      date: param.commit.author.date,
      authorName: param.commit.author.name,
      authorAvatar: param.author.avatar_url,
      url: param.html_url,
    };
  }

  mapTo(): GithubApiResponse {
    throw new Error('mapTo method not implemented.');
  }
}
