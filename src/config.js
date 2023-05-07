const port = 9889
const externalBaseUrl = `http://localhost:${port}/api/v1`
export const EXTERNAL_API_BASE_URL = path => `${externalBaseUrl}${path}`;