// ==========================
// URLs Resource
// Contains the URLs to specific API endpoints.
// ==========================

// Base URL for Auth APIs
export const AUTH_API_BASE_URL = import.meta.env.VITE_API_AUTH_BASE_URL as string;

// URL for Auth APIs
export const GET_USER_INFO_URL = `${AUTH_API_BASE_URL}/user`;
export const GOOGLE_SIGN_IN_URL = `${AUTH_API_BASE_URL}/oauth2/authorization/google`;
export const GOOGLE_SIGN_OUT_URL = `${AUTH_API_BASE_URL}/logout`;

// URL for graphql gateway
export const GRAPHQL_BASE_URL = import.meta.env.VITE_API_GRAPHQL_BASE_URL as string;
