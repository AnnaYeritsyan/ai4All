export function toMediaUrl(media: any) {
  return media ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${media.url}` : ''
}

// export function getStrapiClient() {
//   return createStrapiClient(
//     process.env.NEXT_PUBLIC_STRAPI_URL || '',
//   )
// }
