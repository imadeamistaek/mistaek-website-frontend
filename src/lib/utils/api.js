// src/lib/utils/api.js
export const BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000'
    : 'https://your-deployed-api-url.com';