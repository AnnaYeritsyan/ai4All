"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, ChevronDown, Instagram } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Facebook } from "lucide-react"
import LocalSwitcher from "@/components/language-context";
import { useLocale } from "@/app/api/hooks/useLocale"
import { usePathname } from "next/navigation"
import Image from "next/image"
import logo from '@/public/ai4All_logo.png'


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const locale = useLocale();
  const pathname = usePathname()
  const navigation = [
    { name: "Home", href: `/${locale}` },
    { name: "About Us", href: `/${locale}/about` },
    { name: "News & Media", href: `/${locale}/news` },
    { name: "Blog", href: `/${locale}/blog` },
    { name: "Contact", href: `/${locale}/contact` },
  ];

  // Helper function to check if a link is active
  const isActiveLink = (href:string) => {
    if (href === `/${locale}`) {
      // For home page, check exact match or just locale
      return pathname === href || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="AI4ALL logo"
                width={40} // Adjust as needed
                height={40} // Adjust as needed
                priority
                className="rounded-lg" // Optional: for rounded corners
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveLink(item.href)
                    ? "text-[#02109D] border-b-2 border-[#02109D] font-semibold"
                    : "text-gray-700 hover:text-[#02109D]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Language switcher and contact */}
          <div className="hidden md:flex items-center space-x-4">
            <LocalSwitcher />
            <div className="text-sm text-gray-600">
              <div>+374 XX XXX XXX</div>
              <div>info@eif.am</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? "text-[#02109D] bg-[#02109D]/5 border-l-4 border-[#02109D] font-semibold"
                      : "text-gray-700 hover:text-[#02109D]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t border-gray-100 mt-2">
                <div className="text-sm text-gray-600 mb-2">
                  <div>+374 XX XXX XXX</div>
                  <div>info@eif.am</div>
                </div>
                <LocalSwitcher />
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/AI4ALLbyEIF"
                    className="text-[#AEE9EC] hover:text-[#9FFEE4] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/ai4allbyeif/"
                    className="text-[#AEE9EC] hover:text-[#9FFEE4] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}