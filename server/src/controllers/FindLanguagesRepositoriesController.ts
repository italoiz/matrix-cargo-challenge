import { findLanguagesRepositoriesService } from '#/helpers/services';
import { AppController, AppResponse } from '#/interfaces';

export class FindLanguagesRepositoriesController implements AppController {
  async handler(): Promise<AppResponse> {
    const languages = await findLanguagesRepositoriesService().run();
    return { statusCode: 200, body: languages };
  }
}
