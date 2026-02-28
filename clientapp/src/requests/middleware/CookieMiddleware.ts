import IMiddleware, { RequestContext, ResponseContext } from './IMiddleware';
import AuthTokenStore from '../auth/AuthTokenStore';
import { AUTH_ENDPOINTS } from '../auth/IAuthContract';

/**
 * CookieMiddleware — extracts auth token from signup/signin responses
 * and stores it in the cookie store.
 *
 * On auth endpoint responses:
 *   - Looks for `data.token` or `token` in response body
 *   - Stores it via AuthTokenStore (cookie + memory)
 *
 * On 401 responses (any endpoint):
 *   - Clears stored token (session expired / invalid)
 *
 * Backward compatible:
 *   - If the server doesn't return a token yet, this is a no-op.
 */
class CookieMiddleware implements IMiddleware {
  private authPaths: string[];

  constructor(private tokenStore: AuthTokenStore) {
    this.authPaths = [AUTH_ENDPOINTS.SIGNUP, AUTH_ENDPOINTS.SIGNIN];
  }

  onResponse(response: ResponseContext, request: RequestContext): ResponseContext {
    // Extract + store token from auth endpoint responses
    if (this.isAuthEndpoint(request.url)) {
      const token =
        response.data?.data?.token ||
        response.data?.token ||
        null;
      if (token) {
        this.tokenStore.setToken(token);
      }
    }

    // Clear token on 401 (server says unauthorized)
    if (response.status === 401) {
      this.tokenStore.clearToken();
    }

    return response;
  }

  /** Check if the URL matches an auth endpoint. */
  private isAuthEndpoint(url: string): boolean {
    return this.authPaths.some((path) => url.includes(path));
  }
}

export default CookieMiddleware;
