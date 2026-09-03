import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL as string

/**
 * Axios instance for the Laravel API.
 *
 * `withCredentials` + the `xsrf*` options make axios automatically read the
 * `XSRF-TOKEN` cookie set by Sanctum and send it back as `X-XSRF-TOKEN` on
 * state-changing requests, and ensure the session cookie is sent/stored.
 */
export const api = axios.create({
  baseURL: `${apiBaseUrl}/api`,
  withCredentials: true,
  withXSRFToken: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
})

/**
 * Sanctum's SPA (cookie-based) authentication requires fetching a CSRF
 * cookie before the first state-changing request (register/login/logout).
 */
export const ensureCsrfCookie = () =>
  axios.get(`${apiBaseUrl}/sanctum/csrf-cookie`, { withCredentials: true })
