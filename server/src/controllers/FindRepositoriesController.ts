import { findRepositoriesService } from '#/helpers/services';
import { AppController, AppRequest, AppResponse } from '#/interfaces';

interface RequestQuery {
  lang?: string;
}

export class FindRepositoriesController implements AppController<RequestQuery> {
  async handler(req: AppRequest<RequestQuery>): Promise<AppResponse> {
    const queryLanguage = req.query?.lang;
    const repositories = await findRepositoriesService().run({
      language: queryLanguage,
    });
    return { statusCode: 200, body: repositories };
  }
}
