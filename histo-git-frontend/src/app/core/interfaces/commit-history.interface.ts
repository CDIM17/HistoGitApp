export interface CommitHistory {
  sha: string;
  message: string;
  date: string;
  authorName: string;
  authorAvatar: string;
  authorEmail: string;
  url: string;
}

export interface CommitHistoryResponseApi {
  ok: boolean;
  data: CommitHistory[];
  code: number;
  message: string;
  controller: string;
  timestamp: Date;
}
