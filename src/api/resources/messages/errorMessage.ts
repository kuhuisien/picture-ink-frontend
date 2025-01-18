// ==========================
// Error message formatters
//
// Formats frontend error messages from all API calls.
// ==========================

// ==================
// COMMON
// ==================
export const formatPayloadUndefinedErrorMessage = (URL: string) => {
  return `Response payload from "${URL}" was found to be undefined`;
};

export const formatPayloadNullErrorMessage = (URL: string) => {
  return `Response payload from "${URL}" was found to be null`;
};

// ==================
// Get User Info
// ==================
export const formatGetUserInfoErrorMessage = (URL: string) => {
  return `An error occurred while getting user info from "${URL}"`;
};
