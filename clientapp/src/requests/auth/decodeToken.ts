import { tokenStore } from '../core/request';

/**
 * JWT payload shape based on IAuthContract.
 */
export interface JwtPayload {
  sub: string;       // userId
  name: string;      // display name
  role: 'user' | 'custodian';
  iat: number;       // issued at
  exp: number;       // expiry
  [key: string]: any;
}

/**
 * Decode the JWT payload without verification (client-side only).
 * The server already validated the token — we just need to read claims.
 *
 * Returns null if no token exists or if decoding fails.
 */
export function decodeTokenPayload(): JwtPayload | null {
  const token = tokenStore.getToken();
  if (!token) return null;

  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    // JWT payload is base64url-encoded — convert to standard base64
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const json = atob(base64);
    const payload = JSON.parse(json) as JwtPayload;

    // Check if token has expired
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Quick check: is the current token expired?
 */
export function isTokenExpired(): boolean {
  const payload = decodeTokenPayload();
  return !payload;
}
