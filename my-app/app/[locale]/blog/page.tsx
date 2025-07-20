'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useBlogPage } from "@/app/api/content/useBlog";
import { useLocale } from "@/app/api/hooks/useLocale";
import { useNewsInfos } from "@/app/api/content/useNews";
import { useBlogsInfos } from "@/app/api/content/useBlog";

export default function BlogPage() {
  const locale = useLocale();
  const { data: blogPage } = useBlogPage(locale);
  const { data: newsInfos } = useNewsInfos(locale);
  const { data: blogsInfos } = useBlogsInfos(locale);
  const blogPosts = [
    {
      id: 1,
      title: "AI4ALL: How Artificial Intelligence Is Changing Education and the World",
      excerpt:
        "Exploring the transformative impact of artificial intelligence on educational systems and its broader implications for society and global development.",
      author: "EIF Team",
      date: "2025-06-02",
      category: "Education",
      readTime: "8 min read",
      featured: true,
      url: "https://blog.eif.am/hy/2025/06/02/ai4all%e2%80%a4-%d5%ab%d5%b6%d5%ba%d5%a5%d5%bd-%d5%a7/",
    },
    {
      id: 2,
      title: "EIF's AI4ALL Initiative and Teachers: What's Left for Us to Do? Adapt and Learn",
      excerpt:
        "A deep dive into how educators can embrace artificial intelligence as a tool for enhancement rather than replacement, focusing on adaptation and continuous learning.",
      author: "EIF Team",
      date: "2025-04-23",
      category: "Education",
      readTime: "6 min read",
      featured: false,
      url: "https://blog.eif.am/hy/2025/04/23/eif-ai4teachers/",
    },
    {
      id: 3,
      title: "Artificial Intelligence and Education: The Role of Teachers in the Technological Age",
      excerpt:
        "Understanding how educators can maintain their essential role while leveraging AI technologies to create more effective and personalized learning experiences.",
      author: "Dr. Armen Sarkissian",
      date: "2025-01-15",
      category: "Education",
      readTime: "10 min read",
      featured: false,
      url: null,
    },
    {
      id: 4,
      title: "From Yerevan to Silicon Valley: Building Global AI Competency",
      excerpt:
        "Strategies for Armenian professionals to develop world-class AI skills and compete in the global technology market.",
      author: "Ani Ghukasyan",
      date: "2024-01-03",
      category: "Professional Development",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Creative AI: How Young Artists Are Revolutionizing Content Creation",
      excerpt:
        "Showcasing innovative ways young creators are using AI tools to produce art, music, and multimedia content.",
      author: "Tigran Mesropian",
      date: "2023-12-29",
      category: "Creativity",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: 6,
      title: "AI Accessibility: Making Technology Inclusive for All Communities",
      excerpt:
        "Examining how AI4ALL ensures that artificial intelligence benefits reach diverse communities and underserved populations.",
      author: "Sona Harutyunyan",
      date: "2023-12-22",
      category: "Accessibility",
      readTime: "9 min read",
      featured: false,
    },
  ]

  const categories = [
    blogPage?.all_posts_title || "All Posts",
    blogPage?.education_title || "Education",
    blogPage?.busines_title || "Business",
    blogPage?.professiona_development || "Professional Development",

  ]

  function formatDate(dateString:any) {
    const d = new Date(dateString);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  }

  function extractFirstUrl(markdown: string): string | null {
    const urlMatch = markdown.match(/https?:\/\/[\w\-._~:/?#[\]@!$&'()*+,;=%]+/);
    return urlMatch ? urlMatch[0] : null;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02109D] to-[#F96570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blogPage?.title || "AI4ALL Blog"}</h1>
            <p className="text-xl text-[#AEE9EC] leading-relaxed">
              {blogPage?.description || "Insights, tutorials, and thought leadership on artificial intelligence education, implementation, and its impact on society."}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Recent Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.isArray(blogsInfos) && blogsInfos.map((item) => {
                  const url = extractFirstUrl(item.content);
                  const contentWithoutUrl = url ? item.content.replace(url, "") : item.content;
                  return (
                    <Card key={item.documentId || item.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-[#02109D] mb-3 line-clamp-2">
                          {contentWithoutUrl.split('\n')[0].replace(/\*\*/g, "")}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {contentWithoutUrl.split('\n').slice(1).join(' ').slice(0, 200)}...
                        </p>
                        <div className="flex items-center text-gray-500 text-xs mb-2">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{item.createdAt ? formatDate(item.createdAt) : ""}</span>
                        </div>
                        {url && (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#02109D] hover:text-[#F96570] font-medium underline"
                          >
                            Open Resource
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#02109D] mb-4">{blogPage?.category_title || "Categories"}</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="block text-gray-600 hover:text-[#02109D] py-1 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#02109D] mb-4">
                    {locale === 'en'
                      ? 'Recently News'
                      : locale === 'hy'
                        ? 'Վերջին նորությունները'
                        : blogPage?.recent_posts_title || 'Recent Posts'}
                  </h3>
                  <div className="space-y-4">
                    {Array.isArray(newsInfos) && newsInfos.slice(0, 3).map((item) => (
                      <div key={item.documentId || item.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <Link
                          href={`/${locale}/news/${item.documentId || item.id}`}
                          target="_self"
                          className="block"
                        >
                          <h4 className="font-medium text-[#02109D] hover:text-[#F96570] mb-1 line-clamp-2">
                            {item.content.split('\n')[0].replace(/\*\*/g, "")}
                          </h4>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{item.createdAt ? formatDate(item.createdAt) : ""}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
