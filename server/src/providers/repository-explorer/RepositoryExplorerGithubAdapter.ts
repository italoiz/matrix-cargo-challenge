import axios, { AxiosInstance } from 'axios';

import {
  FindAllRepositories,
  FindAllRepositoriesByLanguage,
  FindAllLanguagesRepositories,
  Repository,
  Language,
} from '#/interfaces';

interface GithubRepositoryOwner {
  id: number;
  login: string;
  avatar_url: string;
}

interface GithubRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  owner: GithubRepositoryOwner;
}

interface GithubSearchResult {
  total_count: number;
  items: GithubRepository[];
}

interface GithubLanguage {
  name: string;
  aliases: string[];
}

export class RepositoryExplorerGithubAdapter
  implements
    FindAllRepositories,
    FindAllRepositoriesByLanguage,
    FindAllLanguagesRepositories {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.github.com',
    });
  }

  private mapRepository(repo: GithubRepository): Repository {
    const { id, name, full_name, description, html_url, owner } = repo;
    const { login, avatar_url } = owner;

    return {
      id,
      name,
      full_name,
      description,
      html_url,
      owner: { id: owner.id, login, avatar_url },
    };
  }

  async findAllRepositories(): Promise<Repository[]> {
    try {
      const { data: allRepositories } = await this.api.get<GithubRepository[]>(
        '/repositories',
      );

      return allRepositories.map(this.mapRepository);
    } catch {
      return [];
    }
  }

  async findAllRepositoriesByLanguage(lang: string): Promise<Repository[]> {
    try {
      const { data: allRepositories } = await this.api.get<GithubSearchResult>(
        '/search/repositories',
        { params: { q: `language:${lang}` } },
      );

      return allRepositories.items.map(this.mapRepository);
    } catch {
      return [];
    }
  }

  async findAllLanguagesRepositories(): Promise<Language[]> {
    try {
      const { data: allLanguages } = await this.api.get<GithubLanguage[]>(
        '/languages',
      );

      return allLanguages.map(({ name }) => ({ name }));
    } catch {
      return [];
    }
  }
}
