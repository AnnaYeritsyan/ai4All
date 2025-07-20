'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users } from "lucide-react"
import { useLocale } from "@/app/api/hooks/useLocale";
import { useAboutContent } from "@/app/api/content/useAboutContent";
import ReactMarkdown from "react-markdown";

export default function AboutPage() {
  const locale = useLocale();
  const { data: aboutData, isLoading, error } = useAboutContent(locale);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading about page</div>;

  const aboutSource = aboutData?.locale === locale
    ? aboutData
    : aboutData?.localizations?.find((loc: any) => loc.locale === locale) || aboutData;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02109D] to-[#F96570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{aboutSource?.title || "About AI4ALL"}</h1>
            <div className="text-xl text-[#AEE9EC] leading-relaxed">
              <ReactMarkdown>{aboutSource?.content || "The Enterprise Incubator Foundation's flagship initiative..."}</ReactMarkdown>
            </div>
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
                  <h2 className="text-2xl font-bold text-[#02109D]">{aboutSource?.our_mission ? <ReactMarkdown components={{p: 'span'}}>{aboutSource.our_mission.split('\n')[0]}</ReactMarkdown> : "Our Mission"}</h2>
                </div>
                <div className="text-gray-600 text-lg leading-relaxed">
                  <ReactMarkdown>{aboutSource?.our_mission || "..."}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#9FFEE4]">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-[#02109D] mr-3" />
                  <h2 className="text-2xl font-bold text-[#02109D]">{aboutSource?.our_vision ? <ReactMarkdown components={{p: 'span'}}>{aboutSource.our_vision.split('\n')[0]}</ReactMarkdown> : "Our Vision"}</h2>
                </div>
                <div className="text-gray-600 text-lg leading-relaxed">
                  <ReactMarkdown>{aboutSource?.our_vision || "..."}</ReactMarkdown>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-6">
                <ReactMarkdown components={{p: 'span'}}>{aboutSource?.eif_information?.split('\n')[0] || "Enterprise Incubator Foundation"}</ReactMarkdown>
              </h2>
              <div className="text-xl text-gray-600">
                <ReactMarkdown>{aboutSource?.eif_information || "The driving force behind AI4ALL..."}</ReactMarkdown>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* <div className="text-lg text-gray-600 leading-relaxed mb-6">
                <ReactMarkdown>{aboutSource?.eif_information || "..."}</ReactMarkdown>
              </div> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Award className="w-12 h-12 text-[#F96570] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#02109D] mb-2">{aboutSource?.excellence ? <ReactMarkdown components={{p: 'span'}}>{aboutSource.excellence.split('\n')[0]}</ReactMarkdown> : "Excellence"}</h3>
                  <div className="text-gray-600 text-sm">
                    <ReactMarkdown>{aboutSource?.excellence || "..."}</ReactMarkdown>
                  </div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-[#9FFEE4] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#02109D] mb-2">{aboutSource?.community ? <ReactMarkdown components={{p: 'span'}}>{aboutSource.community.split('\n')[0]}</ReactMarkdown> : "Community"}</h3>
                  <div className="text-gray-600 text-sm">
                    <ReactMarkdown>{aboutSource?.community || "..."}</ReactMarkdown>
                  </div>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-[#AEE9EC] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#02109D] mb-2">{aboutSource?.impact ? <ReactMarkdown components={{p: 'span'}}>{aboutSource.impact.split('\n')[0]}</ReactMarkdown> : "Impact"}</h3>
                  <div className="text-gray-600 text-sm">
                    <ReactMarkdown>{aboutSource?.inpackt || "..."}</ReactMarkdown>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-6">
              <ReactMarkdown components={{p: 'span'}}>{aboutSource?.our_approach?.split('\n')[0] || "Our Approach to AI Education"}</ReactMarkdown>
            </h2>
            <div className="text-xl text-gray-600 max-w-3xl mx-auto">
              <ReactMarkdown>{aboutSource?.our_approach || "..."}</ReactMarkdown>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F96570] to-[#F96570]/70 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-extrabold text-4xl drop-shadow-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">{aboutSource?.accessible_learning ? <ReactMarkdown components={{p: 'span'}}>{aboutSource.accessible_learning.split('\n')[0]}</ReactMarkdown> : "Accessible Learning"}</h3>
                <div className="text-gray-600">
                  <ReactMarkdown>{aboutSource?.accessible_learning || "..."}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#02109D] to-[#9FFEE4] rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-extrabold text-4xl drop-shadow-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">{aboutSource?.practical_Application ? <ReactMarkdown components={{p: 'span'}}>{aboutSource.practical_Application.split('\n')[0]}</ReactMarkdown> : "Practical Application"}</h3>
                <div className="text-gray-600">
                  <ReactMarkdown>{aboutSource?.practical_Application || "..."}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#AEE9EC] to-[#9FFEE4] rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-extrabold text-4xl drop-shadow-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#02109D] mb-3">{aboutSource?.community_building ? <ReactMarkdown components={{p: 'span'}}>{aboutSource.community_building.split('\n')[0]}</ReactMarkdown> : "Community Building"}</h3>
                <div className="text-gray-600">
                  <ReactMarkdown>{aboutSource?.community_building || "..."}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
