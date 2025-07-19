import { useQuery } from "@tanstack/react-query";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const fetchVision = async (locale: string) => {
  const res = await fetch(`${API_URL}/visions?locale=${locale}&populate=*`);
  if (!res.ok) throw new Error("Failed to fetch vision");
  const data = await res.json();
  return data.data;
};

export function useVision(locale: string) {
  return useQuery({
    queryKey: ["vision", locale],
    queryFn: () => fetchVision(locale),
  });
}
