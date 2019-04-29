import {RequestHandler} from 'express';

/**
 * @param {RequestHandler} fn - Request handler to be wrapped
 * @returns {RequestHandler} Wrapped request handler
 */
export const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
};