import { useCallback, useSyncExternalStore } from 'react';
import { tokenStore } from '../../../../requests/core/request';

/**
 * useAuth — React hook exposing auth state from the cookie-based token store.
 *
 * Returns:
 *   - isAuthenticated: whether a token exists
 *   - logout: clears token from cookie + memory
 */
function useAuth() {
  // Re-render when token changes via useSyncExternalStore
  const isAuthenticated = useSyncExternalStore(
    // Subscribe: poll cookie on storage events (cross-tab sync)
    (onStoreChange) => {
      const handler = () => onStoreChange();
      window.addEventListener('storage', handler);
      return () => window.removeEventListener('storage', handler);
    },
    // getSnapshot
    () => tokenStore.isAuthenticated()
  );

  const logout = useCallback(() => {
    tokenStore.clearToken();
    // notifyChange() inside clearToken() dispatches the storage event
  }, []);

  return { isAuthenticated, logout };
}

export default useAuth;
