import {
  AppService,
  FindAllRepositories,
  FindAllRepositoriesByLanguage,
  Repository,
} from '#/interfaces';

interface FindRepositoriesParams {
  language?: string;
}

type Repositories = FindAllRepositories & FindAllRepositoriesByLanguage;

export class FindRepositorieService
  implements AppService<Promise<Repository[]>> {
  constructor(private readonly repositories: Repositories) {}

  async run(params: FindRepositoriesParams = {}): Promise<Repository[]> {
    const { language } = params;

    const allRepositories = language
      ? await this.repositories.findAllRepositoriesByLanguage(language)
      : await this.repositories.findAllRepositories();

    return allRepositories;
  }
}
