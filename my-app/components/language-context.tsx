"use client";

import { useEffect, useState, useTransition, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import { useLocale } from "@/app/api/hooks/useLocale";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [localName, setLocalName] = useState<string>(localActive);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locales = [
    { code: "en", label: "En",  },
    { code: "hy", label: "Hy", },
  ];

  const currentLocale = locales.find((locale) => locale.code === localName);

  const removeLocaleFromPathname = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (locales.some((locale) => locale.code === segments[0])) {
      segments.shift();
    }
    return `/${segments.join("/")}`;
  };

  const handleLocaleChange = (nextLocale: string) => {
    setIsOpen(false);
    const newPathname = removeLocaleFromPathname();
    startTransition(() => {
      router.replace(`/${nextLocale}${newPathname}`);
      window.location.href = `/${nextLocale}${newPathname}`;
    });
    setLocalName(nextLocale);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center space-x-2  rounded py-2 md:px-4 bg-transparent cursor-pointer"
      >
        <div>{currentLocale?.label}</div>
       
        <svg
          className="h-2 w-2 text-slate-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full border bg-white rounded shadow-md z-[100]">
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={() => handleLocaleChange(locale.code)}
              className="flex items-center space-x-2 px-[5px] md:px-4 py-2 hover:bg-gray-100 w-full text-left cursor-pointer"
            >
              <div>{locale.label}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
