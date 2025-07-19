'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, GraduationCap, Building2, Globe } from "lucide-react"
import { useLocale } from "../api/hooks/useLocale"
import { fetchVision } from "../api/content/useVision"

export default function HomePage() {
  const locale = useLocale()
const data =  fetchVision(locale)
console.log(data)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02109D] via-[#02109D] to-[#F96570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI4ALL
                <span className="block text-[#AEE9EC]">Artificial Intelligence</span>
                <span className="block text-[#9FFEE4]">for Everyone</span>
              </h1>
              <p className="text-xl text-[#AEE9EC] mb-8 leading-relaxed">
                Empowering young people, teachers, small businesses, and Armenian professionals to harness the power of
                artificial intelligence for a smarter, more connected future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#9FFEE4] text-[#02109D] hover:bg-[#AEE9EC]">
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#AEE9EC] text-[#AEE9EC] hover:bg-[#AEE9EC] hover:text-[#02109D] bg-transparent"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#AEE9EC]/20 to-[#9FFEE4]/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#9FFEE4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#02109D] text-3xl font-bold">AI</span>
                  </div>
                  <p className="text-[#AEE9EC] text-lg">Transforming Education & Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-4">Our Vision for the Future</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We envision a present and future where artificial intelligence empowers everyone to achieve more, learn
              better, and compete globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-l-4 border-l-[#F96570] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-[#F96570] mb-4" />
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">Young People</h3>
                <p className="text-gray-600">
                  Create engaging content using cutting-edge artificial intelligence tools and platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#9FFEE4] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <GraduationCap className="w-12 h-12 text-[#02109D] mb-4" />
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">Teachers</h3>
                <p className="text-gray-600">
                  Enhance teaching methods and student engagement through intelligent educational assistants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#AEE9EC] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-[#02109D] mb-4" />
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">Small Businesses</h3>
                <p className="text-gray-600">
                  Automate daily tasks and operations to grow smarter and more efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#02109D] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-[#02109D] mb-4" />
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">Armenian Professionals</h3>
                <p className="text-gray-600">
                  Compete globally with advanced AI skills and knowledge in the international market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#AEE9EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-6">Ready to Join the AI Revolution?</h2>
          <p className="text-xl text-[#02109D]/80 mb-8 max-w-2xl mx-auto">
            Discover how AI4ALL can transform your approach to learning, teaching, and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#02109D] hover:bg-[#02109D]/90">
              <Link href="/news">Latest News</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#02109D] text-[#02109D] hover:bg-[#02109D] hover:text-white bg-transparent"
            >
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
