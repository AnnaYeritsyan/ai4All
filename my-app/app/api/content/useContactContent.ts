import { useQuery } from "@tanstack/react-query";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const fetchContactContent = async (locale: string) => {
  const res = await fetch(`${API_URL}/contact?locale=${locale}&populate=*`);
  if (!res.ok) throw new Error("Failed to fetch contact content");
  const data = await res.json();
  return data.data;
};

export function useContactContent(locale: string) {
  return useQuery({
    queryKey: ["contactContent", locale],
    queryFn: () => fetchContactContent(locale),
  });
}

// New hook for contact-page
export const fetchContactPage = async (locale: string) => {
  const res = await fetch(`${API_URL}/contact-page?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to fetch contact page");
  const data = await res.json();
  return data.data;
};

export function useContactPage(locale: string) {
  return useQuery({
    queryKey: ["contactPage", locale],
    queryFn: () => fetchContactPage(locale),
  });
} 