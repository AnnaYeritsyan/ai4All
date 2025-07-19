import { useQuery } from "@tanstack/react-query";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const fetchAboutContent = async (locale: string) => {
  const res = await fetch(`${API_URL}/about-us-page?locale=${locale}&populate=*`);
  if (!res.ok) throw new Error("Failed to fetch about content");
  const data = await res.json();
  return data.data;
};

export function useAboutContent(locale: string) {
  return useQuery({
    queryKey: ["aboutContent", locale],
    queryFn: () => fetchAboutContent(locale),
  });
} 