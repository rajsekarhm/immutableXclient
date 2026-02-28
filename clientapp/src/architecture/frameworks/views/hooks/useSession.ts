import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../adapters/store';
import { decodeTokenPayload, JwtPayload } from '../../../../requests/auth/decodeToken';
import useAuth from './useAuth';
import useUserController from './useAccount';

/**
 * useSession — resolves the current user's identity and ensures
 * the Redux store is hydrated, even after a hard refresh.
 *
 * Flow:
 *   1. Cookie (auth token) always survives refresh → isAuthenticated = true
 *   2. Decode JWT payload to get userId, role, name (no network call)
 *   3. If Redux store is empty (user === null), re-fetch user data using the
 *      userId from the JWT — this restores assets, tokens, profile, etc.
 *
 * Returns:
 *   - session: decoded JWT claims (sub, name, role) — available immediately
 *   - isAuthenticated: whether a valid token exists
 *   - user: full user profile from Redux (may be null briefly while re-fetching)
 *   - isHydrating: true while the store is being re-populated after a refresh
 */
function useSession() {
  const { isAuthenticated, logout } = useAuth();
  const userController = useUserController();
  const { user, loading } = useSelector((state: RootState) => state.user);

  // Decode once per render (cheap, no network call)
  const session: JwtPayload | null = useMemo(() => {
    if (!isAuthenticated) return null;
    return decodeTokenPayload();
  }, [isAuthenticated]);

  // Re-hydrate Redux store when it's empty but we have a valid session
  useEffect(() => {
    if (session?.sub && !user && !loading) {
      userController.execute('getUser', session.sub);
    }
  }, [session?.sub, user, loading]);

  return {
    session,            // { sub: "userId123", name: "John", role: "user", ... }
    isAuthenticated,
    user,               // Full profile from Redux (null until fetched)
    isHydrating: isAuthenticated && !user && loading,
    logout,
  };
}

export default useSession;
