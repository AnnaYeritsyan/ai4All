
import { usePathname } from "next/navigation";

export function useLocale(defaultLocale: string = "en") {
  const pathname = usePathname();

  return pathname.split("/")[1] || defaultLocale;
}
