import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02109D] to-[#F96570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AI4ALL</h1>
            <p className="text-xl text-[#AEE9EC] leading-relaxed">
              The Enterprise Incubator Foundation's flagship initiative to democratize artificial intelligence education
              and empower communities across Armenia and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-[#F96570]">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-[#F96570] mr-3" />
                  <h2 className="text-2xl font-bold text-[#02109D]">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To make artificial intelligence accessible, understandable, and beneficial for everyone. We believe
                  that AI should not be limited to tech giants or specialized professionals, but should empower
                  individuals and communities to solve real-world problems and create meaningful opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#9FFEE4]">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-[#02109D] mr-3" />
                  <h2 className="text-2xl font-bold text-[#02109D]">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A future where artificial intelligence enhances human potential across all sectors. We envision
                  Armenian professionals competing globally, educators transforming learning experiences, businesses
                  automating intelligently, and young minds creating innovative solutions using AI tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About EIF */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-6">Enterprise Incubator Foundation</h2>
              <p className="text-xl text-gray-600">
                The driving force behind AI4ALL and numerous other innovative initiatives
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Enterprise Incubator Foundation (EIF) is a leading organization dedicated to fostering innovation,
                entrepreneurship, and technological advancement in Armenia. With years of experience in supporting
                startups, educational initiatives, and community development programs, EIF has established itself as a
                catalyst for positive change.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our foundation believes in the transformative power of technology and education. Through AI4ALL, we're
                extending our commitment to making cutting-edge technologies accessible to all segments of society,
                ensuring that no one is left behind in the digital revolution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Award className="w-12 h-12 text-[#F96570] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#02109D] mb-2">Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    Committed to the highest standards in education and innovation
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-[#9FFEE4] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#02109D] mb-2">Community</h3>
                  <p className="text-gray-600 text-sm">Building strong networks and collaborative partnerships</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-[#AEE9EC] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#02109D] mb-2">Impact</h3>
                  <p className="text-gray-600 text-sm">Creating measurable positive change in society</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-6">Our Approach to AI Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in practical, accessible, and inclusive AI education that meets people where they are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#F96570]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#F96570] font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">Accessible Learning</h3>
                <p className="text-gray-600">
                  Breaking down complex AI concepts into understandable, actionable knowledge for all skill levels.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#9FFEE4]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#02109D] font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">Practical Application</h3>
                <p className="text-gray-600">
                  Focusing on real-world use cases and hands-on experience with AI tools and technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#AEE9EC]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#02109D] font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">Community Building</h3>
                <p className="text-gray-600">
                  Creating networks of learners, educators, and professionals to share knowledge and collaborate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
