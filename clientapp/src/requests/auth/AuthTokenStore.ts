import { AUTH_CONFIG } from './IAuthContract';

/**
 * AuthTokenStore — manages auth token persistence in browser cookies.
 *
 * Uses document.cookie as primary storage.
 * The token is also kept in memory for fast synchronous access.
 */
class AuthTokenStore {
    private cachedToken: string | null = null;

    constructor() {
        // Hydrate from existing cookie on init
        this.cachedToken = this.readCookie();
    }

    /** Store token in cookie + memory cache. */
    setToken(token: string, expiryDays = AUTH_CONFIG.TOKEN_EXPIRY_DAYS): void {
        this.cachedToken = token;
        const date = new Date();
        date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
        document.cookie = `${AUTH_CONFIG.COOKIE_NAME}=${token}; expires=${date.toUTCString()}; path=/; SameSite=Strict`;
        this.notifyChange();
    }

    /** Get token (memory-first, then cookie fallback). */
    getToken(): string | null {
        if (this.cachedToken) return this.cachedToken;
        this.cachedToken = this.readCookie();
        return this.cachedToken;
    }

    /** Clear token from cookie + memory. */
    clearToken(): void {
        this.cachedToken = null;
        document.cookie = `${AUTH_CONFIG.COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        this.notifyChange();
    }

    /**
     * Dispatch a synthetic 'storage' event so useSyncExternalStore
     * re-checks getSnapshot() and React re-renders.
     * (Native 'storage' event only fires in OTHER tabs, not the current one.)
     */
    private notifyChange(): void {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('storage'));
        }
    }

    /** Check if a token exists. */
    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    /** Read token from document.cookie. */
    private readCookie(): string | null {

        if (typeof document === 'undefined') return null;
        function getTokenFromCookie(): string | null {
            if (!document.cookie) return null;
            const cookies = document.cookie.split(';');
            for (const cookie of cookies) {
                const trimmed = cookie.trim();
                // Check if this cookie starts with 'auth-token='
                if (trimmed.startsWith(`${AUTH_CONFIG.COOKIE_NAME}=`)) {
                    // Extract everything after 'auth-token='
                    // Using substring instead of split to handle '=' in JWT base64 padding
                    return trimmed.substring(`${AUTH_CONFIG.COOKIE_NAME}=`.length) || null;
                }
            }
            return null;
        }
        return getTokenFromCookie();
    }
}

export default AuthTokenStore;
