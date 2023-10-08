export type Response<T> = {
  ok: boolean;
  data: T | T[];
  code: number;
  message: string;
  controller: string;
  timestamp: string;
};
