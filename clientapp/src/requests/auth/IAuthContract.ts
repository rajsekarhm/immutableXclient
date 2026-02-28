/**
 * ============================================================================
 * SERVER AUTH CONTRACT — Authentication Response Protocol
 * ============================================================================
 *
 * This contract defines the expected server behavior for authentication.
 * A server agent implementing auth endpoints MUST conform to this specification.
 *
 * ── TOKEN FORMAT ──────────────────────────────────────────────────────────────
 *
 *   JWT signed token containing at minimum:
 *   {
 *     sub: string;         // User's unique identifier (replaces securityId)
 *     name: string;        // User's display name
 *     role: "user" | "custodian";
 *     iat: number;         // Issued-at timestamp
 *     exp: number;         // Expiry timestamp (recommended: 24h)
 *   }
 *
 * ── SIGNUP: POST /api/v1/user/createUser ──────────────────────────────────────
 *
 *   Request Body:
 *   {
 *     firstName: string;
 *     lastName: string;
 *     email: string;
 *     phoneNumber: string;
 *     password: string;
 *     securityId?: string;   // DEPRECATED — server should generate unique id
 *   }
 *
 *   Success Response (201):
 *   Headers:
 *     Set-Cookie: auth-token=<jwt>; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400
 *   Body:
 *   {
 *     status: "CREATED",
 *     data: {
 *       user: { firstName, lastName, email, userId, ... },
 *       token: "<jwt-token>"   // Also in body for client-side storage fallback
 *     }
 *   }
 *
 * ── SIGNIN: PUT /api/v1/user/auth ─────────────────────────────────────────────
 *
 *   Request Body:
 *   {
 *     username: string;
 *     password: string;
 *     securityId?: string;   // DEPRECATED — kept for backward compatibility
 *   }
 *
 *   Success Response (200):
 *   Headers:
 *     Set-Cookie: auth-token=<jwt>; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400
 *   Body:
 *   {
 *     status: "FOUND",
 *     data: {
 *       user: { firstName, lastName, email, userId, ... },
 *       token: "<jwt-token>"
 *     }
 *   }
 *
 * ── AUTHENTICATED REQUESTS ────────────────────────────────────────────────────
 *
 *   ALL authenticated endpoints MUST accept either:
 *     Header:  Authorization: Bearer <jwt-token>
 *     Cookie:  auth-token=<jwt>
 *
 *   Server should check Authorization header first, then fall back to cookie.
 *
 * ── LOGOUT: POST /api/v1/user/logout ──────────────────────────────────────────
 *
 *   Request: (no body needed, token identifies user)
 *   Response (200):
 *   Headers:
 *     Set-Cookie: auth-token=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0
 *   Body:
 *   { status: "LOGGED_OUT" }
 *
 * ── ERROR RESPONSES ───────────────────────────────────────────────────────────
 *
 *   401 Unauthorized (token expired or invalid):
 *   { status: "UNAUTHORIZED", message: "Token expired or invalid" }
 *   → Client will clear stored token and redirect to sign-in.
 *
 *   403 Forbidden (valid token, insufficient permissions):
 *   { status: "FORBIDDEN", message: "Insufficient permissions" }
 *
 * ── BACKWARD COMPATIBILITY ────────────────────────────────────────────────────
 *
 *   Until the server implements this contract:
 *   - Client will attempt to extract token from response body `data.token`
 *   - If no token is present, client continues without auth headers (query-param fallback)
 *   - securityId-based URL query params still work as before
 *   - The middleware pipeline is a no-op when no token exists
 *
 * ============================================================================
 */

/** Shape of an auth response from server (signup or signin). */
export interface IAuthResponse {
  status: 'CREATED' | 'FOUND' | 'UNAUTHORIZED' | 'FORBIDDEN' | 'LOGGED_OUT';
  data?: {
    user?: Record<string, any>;
    token?: string;
  };
  message?: string;
}

/** Paths that are auth endpoints (produce tokens). */
export const AUTH_ENDPOINTS = {
  SIGNUP: '/user/createUser',
  SIGNIN: '/user/auth',
  LOGOUT: '/user/logout',
} as const;

/** Cookie / header configuration the server must respect. */
export const AUTH_CONFIG = {
  COOKIE_NAME: 'auth-token',
  HEADER_NAME: 'Authorization',
  HEADER_PREFIX: 'Bearer',
  TOKEN_EXPIRY_DAYS: 1,
} as const;
