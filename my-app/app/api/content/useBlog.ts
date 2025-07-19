import { useQuery } from "@tanstack/react-query";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const fetchBlog = async (locale: string) => {
  const res = await fetch(`${API_URL}/blog?locale=${locale}&populate=*`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  const data = await res.json();
  return data.data;
};

export function useBlog(locale: string) {
  return useQuery({
    queryKey: ["blog", locale],
    queryFn: () => fetchBlog(locale),
  });
} 