import { useQuery } from "@tanstack/react-query";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const fetchNewsMediaPage = async (locale: string) => {
  const res = await fetch(`${API_URL}/news-media-page?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to fetch news-media-page");
  const data = await res.json();
  return data.data;
};

export function useNewsMediaPage(locale: string) {
  return useQuery({
    queryKey: ["newsMediaPage", locale],
    queryFn: () => fetchNewsMediaPage(locale),
  });
} 