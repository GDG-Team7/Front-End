export type UserId = string;

export interface User {
  id?: UserId;
  github_id?: number;
  email?: string;
  age?: string;
  annual?: string;
  accessToken?: string;
}
