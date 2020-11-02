import {
  AppService,
  FindAllLanguagesRepositories,
  Language,
} from '#/interfaces';

export class FindLanguagesRepositoriesService
  implements AppService<Promise<Language[]>> {
  constructor(private readonly repositories: FindAllLanguagesRepositories) {}

  run(): Promise<Language[]> {
    return this.repositories.findAllLanguagesRepositories();
  }
}
