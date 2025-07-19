import { useQuery } from "@tanstack/react-query";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const fetchHeader = async (locale: string) => {
  const res = await fetch(`${API_URL}/header?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to fetch header");
  const data = await res.json();
  return data.data;
};

export function useHeader(locale: string) {
  return useQuery({
    queryKey: ["header", locale],
    queryFn: () => fetchHeader(locale),
  });
}
