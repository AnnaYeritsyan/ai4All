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

// New hook for news-infos
export const fetchNewsInfos = async (locale: string) => {
  const res = await fetch(`${API_URL}/news-infos?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to fetch news infos");
  const data = await res.json();
  return data.data;
};

export function useNewsInfos(locale: string) {
  return useQuery({
    queryKey: ["newsInfos", locale],
    queryFn: () => fetchNewsInfos(locale),
  });
}

// New hook for media-infos
export const fetchMediaInfos = async (locale: string) => {
  const res = await fetch(`${API_URL}/media-infos?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to fetch media infos");
  const data = await res.json();
  return data.data;
};

export function useMediaInfos(locale: string) {
  return useQuery({
    queryKey: ["mediaInfos", locale],
    queryFn: () => fetchMediaInfos(locale),
  });
} 