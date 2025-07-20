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

// New hook for blog-page
export const fetchBlogPage = async (locale: string) => {
  const res = await fetch(`${API_URL}/blog-page?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to fetch blog page");
  const data = await res.json();
  return data.data;
};

export function useBlogPage(locale: string) {
  return useQuery({
    queryKey: ["blogPage", locale],
    queryFn: () => fetchBlogPage(locale),
  });
}

// New hook for blogs-infos
export const fetchBlogsInfos = async (locale: string) => {
  const res = await fetch(`${API_URL}/blogs-infos?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to fetch blogs infos");
  const data = await res.json();
  return data.data;
};

export function useBlogsInfos(locale: string) {
  return useQuery({
    queryKey: ["blogsInfos", locale],
    queryFn: () => fetchBlogsInfos(locale),
  });
} 