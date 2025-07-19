import { useQuery } from "@tanstack/react-query";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const fetchFooter = async (locale: string) => {
  const res = await fetch(`${API_URL}/footer?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to fetch footer");
  const data = await res.json();
  return data.data;
};

export function useFooter(locale: string) {
  return useQuery({
    queryKey: ["footer", locale],
    queryFn: () => fetchFooter(locale),
  });
}
