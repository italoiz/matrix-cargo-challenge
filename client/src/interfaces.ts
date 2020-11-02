export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  owner: { id: number; login: string; avatar_url: string };
}

export interface Language {
  name: string;
}
