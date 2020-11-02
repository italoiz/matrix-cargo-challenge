/*----------------------------------------------------
 * APP INTERFACES
 -----------------------------------------------------*/

export interface AppService<T = any> {
  run(...args: any[]): T;
}

export interface AppRequest<Q = any> {
  query?: Q;
}

export interface AppResponse {
  statusCode: number;
  body?: any;
}

export interface AppController<R = any> {
  handler(request: AppRequest<R>): Promise<AppResponse>;
}

/*----------------------------------------------------
 * MODELS / DATA OF APPLICATION
 -----------------------------------------------------*/

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

/*----------------------------------------------------
 * REPOSITORIES OF APPLICATION
 -----------------------------------------------------*/

export interface FindAllRepositories {
  findAllRepositories(): Promise<Repository[]>;
}

export interface FindAllRepositoriesByLanguage {
  findAllRepositoriesByLanguage(lang: string): Promise<Repository[]>;
}

export interface FindAllLanguagesRepositories {
  findAllLanguagesRepositories(): Promise<Language[]>;
}
