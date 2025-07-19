import { useQuery } from "@tanstack/react-query";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const fetchNews = async (locale: string) => {
  const res = await fetch(`${API_URL}/news-page?locale=${locale}&populate=*`);
  if (!res.ok) throw new Error("Failed to fetch news");
  const data = await res.json();
  return data.data;
};

export function useNews(locale: string) {
  return useQuery({
    queryKey: ["news", locale],
    queryFn: () => fetchNews(locale),
  });
} 