'use client'
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { useLocale } from "@/app/api/hooks/useLocale";
import Image from "next/image";
import logo from '@/public/ai4All_logo.png';
import { useFooter } from "@/app/api/content/useFooter";
import { useHeader } from "@/app/api/content/useHeader";

export function Footer() {
  const locale = useLocale();
  const { data: footerData } = useFooter(locale);
  const { data: headerData } = useHeader(locale);

  // Use navSource from header for navigation names
  const navSource = headerData?.locale === locale
    ? headerData
    : headerData?.localizations?.find((loc: any) => loc.locale === locale) || headerData;

  // Use navSource from footer for other localized fields
  const footerNavSource = footerData?.locale === locale
    ? footerData
    : footerData?.localizations?.find((loc: any) => loc.locale === locale) || footerData;

  const description = footerNavSource?.description || "Empowering everyone with artificial intelligence skills. Creating a future where AI enhances education, business, and professional growth across Armenia and beyond.";
  const quickLinkTitle = footerNavSource?.quick_link_title || "Quick Links";
  const contactTitle = footerNavSource?.contact_title || "Contact Info";
  const location = footerNavSource?.location || "Yerevan, Armenia";

  const contact = footerData?.contact || { phone: "(011) 219797", email: "wave@eif.am", address: "Yerevan, Armenia" };

  const quickLinks = [
    { name: navSource?.home_title || "Home", href: `/${locale}` },
    { name: navSource?.about_us_title || "About Us", href: `/${locale}/about` },
    { name: navSource?.news_title || "News & Media", href: `/${locale}/news` },
    { name: navSource?.blog_title || "Blog", href: `/${locale}/blog` },
    { name: navSource?.contact_title || "Contact", href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-[#02109D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link href={`/${locale}`} className="flex items-center space-x-2">
                <Image
                  src={logo}
                  alt="AI4ALL logo"
                  width={40}
                  height={40}
                  priority
                  className="rounded-lg"
                />
               
              </Link>
            </div>
            <p className="text-[#AEE9EC] mb-4 max-w-md">
              {description}
            </p>
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
              <Link href="#" className="text-[#AEE9EC] hover:text-[#9FFEE4] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-[#AEE9EC] hover:text-[#9FFEE4] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{quickLinkTitle}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link: { name: string; href: string }) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#AEE9EC] hover:text-[#9FFEE4] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{contactTitle}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#9FFEE4]" />
                <span className="text-[#AEE9EC]">{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#9FFEE4]" />
                <span className="text-[#AEE9EC]">{contact.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#9FFEE4] mt-1" />
                <span className="text-[#AEE9EC]">{location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#AEE9EC]/20 mt-8 pt-8 text-center">
          <p className="text-[#AEE9EC]">© 2025 Enterprise Incubator Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
