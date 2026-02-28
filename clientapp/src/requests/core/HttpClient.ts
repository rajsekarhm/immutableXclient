import MiddlewarePipeline from '../middleware/MiddlewarePipeline';
import { RequestContext, ResponseContext } from '../middleware/IMiddleware';

/**
 * HttpClient — fetch wrapper that routes every request through a middleware pipeline.
 *
 * Flow:
 *   1. Build RequestContext
 *   2. pipeline.processRequest() — middleware add headers, transform body
 *   3. fetch()
 *   4. pipeline.processResponse() — middleware extract tokens, handle 401
 *   5. Return parsed data
 */
class HttpClient {
  constructor(private pipeline: MiddlewarePipeline) {}

  async request(
    url: string,
    method: string,
    body?: any,
    contentType = 'application/json'
  ): Promise<any> {
    // 1. Build request context
    let requestContext: RequestContext = {
      url,
      method: method || 'GET',
      headers: new Headers({ 'Content-Type': contentType }),
      body,
      contentType,
    };

    // 2. Run request middleware (e.g., AuthMiddleware adds Bearer token)
    requestContext = await this.pipeline.processRequest(requestContext);

    // 3. Build fetch options
    const options: RequestInit = {
      method: requestContext.method,
      headers: requestContext.headers,
      redirect: 'follow',
      credentials: 'include', // Send cookies cross-origin
    };

    if (requestContext.body && requestContext.method !== 'GET') {
      options.body = JSON.stringify(requestContext.body);
    }

    try {
      // 4. Fetch
      const raw = await fetch(requestContext.url, options);
      const text = await raw.text();
      let data: any;
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      let responseContext: ResponseContext = {
        data,
        status: raw.status,
        headers: raw.headers,
        ok: raw.ok,
      };

      // 5. Run response middleware (e.g., CookieMiddleware extracts token)
      responseContext = await this.pipeline.processResponse(
        responseContext,
        requestContext
      );

      return responseContext.data;
    } catch (error: any) {
      await this.pipeline.processError(error, requestContext);
      throw error;
    }
  }
}

export default HttpClient;
