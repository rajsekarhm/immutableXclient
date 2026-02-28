import MiddlewarePipeline from '../middleware/MiddlewarePipeline';
import AuthMiddleware from '../middleware/AuthMiddleware';
import CookieMiddleware from '../middleware/CookieMiddleware';
import AuthTokenStore from '../auth/AuthTokenStore';
import HttpClient from './HttpClient';

// ── Singleton instances ───────────────────────────────────────────────────────
// Shared across the entire app — every requestAPI call goes through these.

const tokenStore = new AuthTokenStore();

const pipeline = new MiddlewarePipeline()
  .use(new AuthMiddleware(tokenStore))   // Attaches auth token to every request
  .use(new CookieMiddleware(tokenStore)); // Extracts token from auth responses

const httpClient = new HttpClient(pipeline);

// ── Backward-compatible default export ────────────────────────────────────────
// Same signature as before — repositories don't need any changes.

async function requestAPI(
  url: string,
  _method: string,
  _body: any,
  contentType = 'application/json',
  _timeout = 10000
) {
  return httpClient.request(url, _method, _body, contentType);
}

export default requestAPI;
export { httpClient, tokenStore, pipeline };
