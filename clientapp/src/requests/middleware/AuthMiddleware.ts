import IMiddleware, { RequestContext } from './IMiddleware';
import AuthTokenStore from '../auth/AuthTokenStore';
import { AUTH_CONFIG } from '../auth/IAuthContract';

/**
 * AuthMiddleware — attaches stored auth token to every outgoing request.
 *
 * If a token exists in the cookie store, it sets:
 *   Authorization: Bearer <token>
 *
 * If no token exists, the request proceeds without auth headers
 * (backward compatible with the securityId query-param flow).
 */
class AuthMiddleware implements IMiddleware {
  constructor(private tokenStore: AuthTokenStore) {}

  onRequest(context: RequestContext): RequestContext {
    const token = this.tokenStore.getToken();
    if (token) {
      context.headers.set(
        AUTH_CONFIG.HEADER_NAME,
        `${AUTH_CONFIG.HEADER_PREFIX} ${token}`
      );
    }
    return context;
  }
}

export default AuthMiddleware;
