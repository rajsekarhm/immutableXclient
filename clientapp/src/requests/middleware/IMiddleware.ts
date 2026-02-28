/**
 * IMiddleware — contract for HTTP middleware.
 *
 * Middleware can intercept requests (add headers, modify body)
 * and responses (extract tokens, handle errors).
 *
 * Each hook is optional — implement only what you need.
 */

/** Context passed through the request phase. */
export interface RequestContext {
  url: string;
  method: string;
  headers: Headers;
  body?: any;
  contentType: string;
}

/** Context passed through the response phase. */
export interface ResponseContext {
  data: any;
  status: number;
  headers: Headers;
  ok: boolean;
}

export default interface IMiddleware {
  /** Called before fetch — modify request (add headers, transform body). */
  onRequest?(context: RequestContext): RequestContext | Promise<RequestContext>;

  /** Called after fetch — inspect/modify response (extract tokens, handle 401). */
  onResponse?(
    response: ResponseContext,
    request: RequestContext
  ): ResponseContext | Promise<ResponseContext>;

  /** Called on fetch error — logging, cleanup. */
  onError?(error: Error, request: RequestContext): void | Promise<void>;
}
