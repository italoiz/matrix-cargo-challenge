import axios, { AxiosInstance } from 'axios';

import {
  FindAllRepositories,
  FindAllRepositoriesByLanguage,
  FindAllLanguagesRepositories,
  Repository,
  Language,
} from '#/interfaces';

interface GithubRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
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

  async findAllRepositories(): Promise<Repository[]> {
    try {
      const { data: allRepositories } = await this.api.get<GithubRepository[]>(
        '/repositories',
      );

      return allRepositories.map(({ id, name, full_name, html_url }) => ({
        id,
        name,
        full_name,
        html_url,
      }));
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

      return allRepositories.items.map(({ id, name, full_name, html_url }) => ({
        id,
        name,
        full_name,
        html_url,
      }));
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
