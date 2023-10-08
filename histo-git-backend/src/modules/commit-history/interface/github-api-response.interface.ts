// github-api-response.interface.ts
export interface GithubApiResponse {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
      name: string;
    };
  };
  author: {
    avatar_url: string;
  };
  html_url: string;
  // ... other fields you might need.
}
