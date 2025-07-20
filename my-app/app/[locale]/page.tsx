'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, GraduationCap, Building2, Globe } from "lucide-react"
import { useLocale } from "../api/hooks/useLocale"
import { useVision } from "../api/content/useVision"
import { useHomeContent } from "../api/content/useHomeContent"
import { useEffect, useState } from "react";

export default function HomePage() {
  const locale = useLocale();
  const { data, isLoading, error } = useVision(locale);
  const { data: homeData, isLoading: isHomeLoading, error: homeError } = useHomeContent(locale);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading vision</div>;

  console.log(data);

  return (
    <div className="bg-white">
      {/* Hero Section (from homepage data) */}
      {isHomeLoading ? (
        <div>Loading...</div>
      ) : homeError ? (
        <div>Error loading homepage</div>
      ) : homeData ? (
        <section className="relative bg-gradient-to-br from-[#02109D] via-[#02109D] to-[#F96570] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {homeData.title}
                </h1>
                <p className="text-xl text-[#AEE9EC] mb-8 leading-relaxed">
                  {homeData.content}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-[#9FFEE4] text-[#02109D] hover:bg-[#AEE9EC]">
                    <Link href={`/${locale}/about`}>
                      {homeData.btn_more || 'Learn More'} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#AEE9EC] text-[#AEE9EC] hover:bg-[#AEE9EC] hover:text-[#02109D] bg-transparent"
                  >
                    <Link href={`/${locale}/contact`}>{homeData.btn_start || 'Get Started'}</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full text-center h-96 flex items-center justify-center">
                  {typeof homeData.image === 'string' && homeData.image ? (
                    <img
                      src={homeData.image.startsWith('http') ? homeData.image : `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${homeData.image}`}
                      alt={homeData.title}
                      className="w-full h-full object-cover rounded-2xl mx-auto mb-4"
                    />
                  ) : homeData.image && homeData.image.url ? (
                    <img
                      src={homeData.image.url.startsWith('http') ? homeData.image.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${homeData.image.url}`}
                      alt={homeData.title}
                      className="w-full h-full object-cover rounded-2xl mx-auto mb-4"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-[#9FFEE4] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#02109D] text-3xl font-bold">AI</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-4">
              {homeData?.our_vision_title || "Our Vision for the Future"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {homeData?.our_vision_decription || "We envision a present and future where artificial intelligence empowers everyone to achieve more, learn better, and compete globally."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item: any) => {
                const iconUrl = item.icon;
                // Icon selection based on title
                let IconComponent = null;
                if (!iconUrl) {
                  if (item.title === 'Young People') IconComponent = Users;
                  else if (item.title === 'Teachers') IconComponent = GraduationCap;
                  else if (item.title === 'Small Businesses') IconComponent = Building2;
                  else if (item.title === 'Armenian Professionals') IconComponent = Globe;
                }
                return (
                  <Card key={item.id} className="border-l-4 border-l-[#F96570] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      {iconUrl ? (
                        <img
                          src={iconUrl.startsWith('http') ? iconUrl : `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${iconUrl}`}
                          alt={item.title}
                          className="w-12 h-12 mb-4 object-contain"
                        />
                      ) : IconComponent ? (
                        <IconComponent className="w-12 h-12 text-[#02109D] mb-4" />
                      ) : (
                        <div className="w-12 h-12 mb-4 bg-[#AEE9EC]/20 rounded-full flex items-center justify-center">
                          <span className="text-[#02109D] text-2xl font-bold">AI</span>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-[#02109D] mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <div className="col-span-4 text-center text-gray-400">No vision data available.</div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#AEE9EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-6">{homeData?.Join_title || "Ready to Join the AI Revolution?"}</h2>
          <p className="text-xl text-[#02109D]/80 mb-8 max-w-2xl mx-auto">
            {homeData?.join_description || "Discover how AI4ALL can transform your approach to learning, teaching, and business growth."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#02109D] hover:bg-[#02109D]/90">
              <Link href={`/${locale}/news`}>{homeData?.btn_latestnews || "Latest News"}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#02109D] text-[#02109D] hover:bg-[#02109D] hover:text-white bg-transparent"
            >
              <Link href={`/${locale}/blog`}>{homeData?.btn_ourblog || "Read Our Blog"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
