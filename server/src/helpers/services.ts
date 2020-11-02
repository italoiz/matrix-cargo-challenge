import {
  FindAllLanguagesRepositories,
  FindAllRepositories,
  FindAllRepositoriesByLanguage,
} from '#/interfaces';
import { RepositoryExplorerGithubAdapter } from '#/providers/repository-explorer/RepositoryExplorerGithubAdapter';
import { FindLanguagesRepositoriesService } from '#/services/FindLanguagesRepositoriesService';
import { FindRepositorieService } from '#/services/FindRepositoriesService';

type RepositoryExplorer = FindAllRepositories &
  FindAllRepositoriesByLanguage &
  FindAllLanguagesRepositories;

let repositoryExplorer: RepositoryExplorer;
export function getRepositoryExplorer(): RepositoryExplorer {
  if (!repositoryExplorer)
    repositoryExplorer = new RepositoryExplorerGithubAdapter();
  return repositoryExplorer;
}

export function findRepositoriesService(): FindRepositorieService {
  return new FindRepositorieService(getRepositoryExplorer());
}

export function findLanguagesRepositoriesService(): FindLanguagesRepositoriesService {
  return new FindLanguagesRepositoriesService(getRepositoryExplorer());
}
