import { RequestHandler } from 'express';

import { AppController } from '#/interfaces';

export function expressHandler(controller: AppController): RequestHandler {
  return async (req, res) => {
    const { statusCode, body } = await controller.handler({
      query: req.query,
    });
    return res.status(statusCode).json(body);
  };
}
