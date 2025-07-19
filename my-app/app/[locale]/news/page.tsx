import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "AI4ALL Launches Comprehensive Teacher Training Program",
      excerpt:
        "New initiative aims to equip educators with practical AI tools to enhance classroom learning experiences.",
      date: "2024-01-15",
      category: "Education",
      featured: true,
    },
    {
      id: 2,
      title: "Partnership with Leading Tech Companies Announced",
      excerpt:
        "Strategic collaborations will provide students and professionals with access to cutting-edge AI platforms.",
      date: "2024-01-10",
      category: "Partnerships",
      featured: false,
    },
    {
      id: 3,
      title: "Small Business AI Automation Workshop Series Begins",
      excerpt: "Monthly workshops designed to help local businesses implement AI solutions for improved efficiency.",
      date: "2024-01-05",
      category: "Business",
      featured: false,
    },
    {
      id: 4,
      title: "AI Ethics and Responsible Use Guidelines Published",
      excerpt: "Comprehensive framework for ethical AI implementation across educational and business sectors.",
      date: "2023-12-28",
      category: "Ethics",
      featured: false,
    },
    {
      id: 5,
      title: "Youth AI Content Creation Competition Winners Announced",
      excerpt: "Young creators showcase innovative use of AI tools in multimedia projects and digital storytelling.",
      date: "2023-12-20",
      category: "Youth",
      featured: false,
    },
    {
      id: 6,
      title: "Global AI Skills Assessment Report Released",
      excerpt: "Study reveals growing demand for AI literacy across Armenian professional sectors.",
      date: "2023-12-15",
      category: "Research",
      featured: false,
    },
  ]

  const mediaResources = [
    {
      title: "#19 Artificial vs Intelligence | Lusine Ghukasyan - AI and Education: AI4ALL Program | Boon TV",
      type: "Video",
      description:
        "Comprehensive discussion on AI in education featuring the AI4ALL program and its impact on learning.",
      url: "https://www.youtube.com/watch?v=egHbkaSYx6w",
    },
    {
      title: "Artificial Intelligence in Schools: How the Role of the Teacher Is Changing",
      type: "Article",
      description:
        "Exploring the evolving role of educators in the age of artificial intelligence and digital transformation.",
      url: "https://media.am/hy/newsroom/2025/06/23/43064/",
    },
    {
      title: "AI for Teachers: How the Future Is Entering the Classroom",
      type: "Article",
      description:
        "Insights into how artificial intelligence tools are being integrated into modern educational practices.",
      url: "https://arevik.armradio.am/2025/06/07/ai-%d5%a8-%d5%b4%d5%a1%d5%b6%d5%af%d5%a1%d5%be%d5%a1%d6%80%d5%aa%d5%b6%d5%a5%d6%80%d5%ab-%d5%b0%d5%a1%d5%b4%d5%a1%d6%80/",
    },
    {
      title: "Artificial Intelligence in the Learning Process",
      type: "Video",
      description:
        "Educational content exploring how AI is transforming traditional learning methodologies and outcomes.",
      url: "https://www.facebook.com/lurer1tv/videos/1744690016350601/",
    },
    {
      title: "IT Week: Artificial Intelligence for Everyone",
      type: "Radio Interview",
      description:
        "Radio discussion on making artificial intelligence accessible to all segments of society and education.",
      url: "https://imradio.armradio.am/2025/03/29/it-%D5%B7%D5%A1%D5%A2%D5%A1%D5%A9%E2%80%A4-%D5%A1%D6%80%D5%B0%D5%A5%D5%BD%D5%BF%D5%A1%D5%AF%D5%A1%D5%B6/",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02109D] to-[#F96570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Media</h1>
            <p className="text-xl text-[#AEE9EC] leading-relaxed">
              Stay updated with the latest developments in AI education, partnerships, and community initiatives from
              AI4ALL and EIF.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">Recent updates and announcements from the AI4ALL initiative</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            {newsItems
              .filter((item) => item.featured)
              .map((item) => (
                <Card
                  key={item.id}
                  className="lg:col-span-2 border-l-4 border-l-[#F96570] hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-[#F96570] text-white">Featured</Badge>
                      <Badge variant="outline" className="border-[#02109D] text-[#02109D]">
                        {item.category}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-[#02109D] mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <Link href="#" className="text-[#02109D] hover:text-[#F96570] font-medium flex items-center">
                        Read More <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {/* Recent News Sidebar */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#02109D]">Recent Updates</h3>
              {newsItems
                .filter((item) => !item.featured)
                .slice(0, 3)
                .map((item) => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <Badge variant="outline" className="border-[#AEE9EC] text-[#02109D] mb-2">
                        {item.category}
                      </Badge>
                      <h4 className="font-semibold text-[#02109D] mb-2 line-clamp-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <Link href="#" className="text-[#02109D] hover:text-[#F96570] text-sm font-medium">
                          Read More
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All News Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#02109D] mb-8">All News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems
                .filter((item) => !item.featured)
                .map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="border-[#AEE9EC] text-[#02109D] mb-3">
                        {item.category}
                      </Badge>
                      <h4 className="font-semibold text-[#02109D] mb-3 line-clamp-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <Link
                          href="#"
                          className="text-[#02109D] hover:text-[#F96570] font-medium flex items-center text-sm"
                        >
                          Read More <ExternalLink className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-4">Media Resources</h2>
            <p className="text-xl text-gray-600">
              Educational materials and resources for better AI awareness and implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#02109D] line-clamp-2">{resource.title}</h3>
                    <Badge className="bg-[#AEE9EC] text-[#02109D] ml-2 flex-shrink-0">{resource.type}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#02109D] hover:text-[#F96570] font-medium flex items-center"
                  >
                    Access Resource <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
