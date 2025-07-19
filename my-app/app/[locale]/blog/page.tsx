import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
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
    "All Posts",
    "Education",
    "Business",
    "Ethics",
    "Professional Development",
    "Creativity",
    "Accessibility",
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02109D] to-[#F96570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI4ALL Blog</h1>
            <p className="text-xl text-[#AEE9EC] leading-relaxed">
              Insights, tutorials, and thought leadership on artificial intelligence education, implementation, and its
              impact on society.
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
              {/* Featured Post */}
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <Card key={post.id} className="mb-12 border-l-4 border-l-[#F96570] hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-[#F96570] text-white">Featured</Badge>
                        <Badge variant="outline" className="border-[#02109D] text-[#02109D]">
                          {post.category}
                        </Badge>
                      </div>
                      <h2 className="text-3xl font-bold text-[#02109D] mb-4">{post.title}</h2>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span className="text-sm">{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <span className="text-sm">{post.readTime}</span>
                        </div>
                        <Link
                          href={post.url || "#"}
                          target={post.url ? "_blank" : "_self"}
                          rel={post.url ? "noopener noreferrer" : ""}
                          className="text-[#02109D] hover:text-[#F96570] font-medium flex items-center"
                        >
                          Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              {/* Recent Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="border-[#AEE9EC] text-[#02109D] mb-3">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-semibold text-[#02109D] mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <Link
                            href={post.url || "#"}
                            target={post.url ? "_blank" : "_self"}
                            rel={post.url ? "noopener noreferrer" : ""}
                            className="text-[#02109D] hover:text-[#F96570] font-medium flex items-center"
                          >
                            Read More <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#02109D] mb-4">Categories</h3>
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
                  <h3 className="text-xl font-bold text-[#02109D] mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <Link
                          href={post.url || "#"}
                          target={post.url ? "_blank" : "_self"}
                          rel={post.url ? "noopener noreferrer" : ""}
                          className="block"
                        >
                          <h4 className="font-medium text-[#02109D] hover:text-[#F96570] mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-[#AEE9EC] to-[#9FFEE4]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#02109D] mb-3">Stay Updated</h3>
                  <p className="text-[#02109D]/80 text-sm mb-4">
                    Subscribe to our newsletter for the latest AI insights and updates.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-[#02109D]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D]"
                    />
                    <button className="w-full bg-[#02109D] text-white py-2 rounded-md hover:bg-[#02109D]/90 transition-colors">
                      Subscribe
                    </button>
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
