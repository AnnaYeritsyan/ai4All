export const apiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
console.log('DEBUG: NEXT_PUBLIC_STRAPI_URL in browser:', process.env.NEXT_PUBLIC_STRAPI_URL);
export const api_url = `${apiBaseUrl}/api`;
export const Alldata_Api = '?populate=*'
export const API = apiBaseUrl

