import IMiddleware, { RequestContext, ResponseContext } from './IMiddleware';

/**
 * MiddlewarePipeline — chains middleware and runs them in order.
 *
 * Request phase:  runs middleware left-to-right (first added → first to modify request).
 * Response phase: runs middleware left-to-right (first added → first to inspect response).
 * Error phase:    runs all middleware error handlers.
 */
class MiddlewarePipeline {
  private middlewares: IMiddleware[] = [];

  /** Register a middleware. Returns `this` for chaining. */
  use(middleware: IMiddleware): this {
    this.middlewares.push(middleware);
    return this;
  }

  /** Run all onRequest hooks sequentially. */
  async processRequest(context: RequestContext): Promise<RequestContext> {
    let ctx = context;
    for (const mw of this.middlewares) {
      if (mw.onRequest) {
        ctx = await mw.onRequest(ctx);
      }
    }
    return ctx;
  }

  /** Run all onResponse hooks sequentially. */
  async processResponse(
    response: ResponseContext,
    request: RequestContext
  ): Promise<ResponseContext> {
    let res = response;
    for (const mw of this.middlewares) {
      if (mw.onResponse) {
        res = await mw.onResponse(res, request);
      }
    }
    return res;
  }

  /** Run all onError hooks (best-effort, won't throw). */
  async processError(error: Error, request: RequestContext): Promise<void> {
    for (const mw of this.middlewares) {
      if (mw.onError) {
        try {
          await mw.onError(error, request);
        } catch {
          // Middleware error handlers should not break the chain
        }
      }
    }
  }
}

export default MiddlewarePipeline;
