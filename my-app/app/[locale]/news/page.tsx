'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useNewsInfos, useMediaInfos } from "@/app/api/content/useNews";
import { useLocale } from "@/app/api/hooks/useLocale";
import ReactMarkdown from "react-markdown";
import { useNewsMediaPage } from "@/app/api/content/useNewsMediaPage";
import { useParams } from "next/navigation";

export default function NewsPage() {
  const locale = useLocale();
  const { data: newsData, isLoading: isNewsLoading, error: newsError } = useNewsInfos(locale);
  const { data: mediaData, isLoading: isMediaLoading, error: mediaError } = useMediaInfos(locale);
  const { data: pageData } = useNewsMediaPage ? useNewsMediaPage(locale) : { data: undefined };

  // Fallback to empty array if no data
  const newsItems = Array.isArray(newsData) ? newsData : [];
  const mediaResources = Array.isArray(mediaData) ? mediaData : [];

  function fixMarkdownLinks(markdown: string) {
    // Replace [url](link) with [url](url) if the label is a URL and the href is 'link'
    return markdown.replace(
      /\[((?:https?:\/\/)[^\]]+)\]\(link\)/g,
      '[$1]($1)'
    );
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{pageData?.title || "News & Media"}</h1>
            <p className="text-xl text-[#AEE9EC] leading-relaxed">
              {pageData?.header_description || "Stay updated with the latest developments in AI education, partnerships, and community initiatives from AI4ALL and EIF."}
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-4">{pageData?.latest_news || "Latest News"}</h2>
            <p className="text-xl text-gray-600">{pageData?.latest_news_description || "Recent updates and announcements from the AI4ALL initiative"}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsItems.map((item: any) => (
              <Card key={item.documentId || item.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="font-semibold text-[#02109D] mb-2 line-clamp-2">
                    {item.content.split('\n')[0].replace(/\*\*/g, "")}
                  </div>
                  <div className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.content.replace(/[#*_`>\[\]\(\)]/g, "").slice(0, 120)}...
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</span>
                    </div>
                    <Link
                      href={`/${locale}/news/${item.documentId || item.id}`}
                      className="text-[#02109D] hover:text-[#F96570] text-sm font-medium"
                    >
                      {pageData?.btn_read_more || "Read More"}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02109D] mb-4">{pageData?.media_title || "Media Resources"}</h2>
            <p className="text-xl text-gray-600">
              {pageData?.media_description || "Educational materials and resources for better AI awareness and implementation"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaResources.map((resource: any, index: number) => {
              const url = extractFirstUrl(resource.content || resource.title);
              const resourceUrl = resource.url || null;
              const showOpenResource = url && url !== resourceUrl;
              const showAccessResource = resourceUrl && (!url || url !== resourceUrl);
              return (
                <Card key={resource.id || index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 text-xl font-semibold text-[#02109D] line-clamp-2">
                      <ReactMarkdown
                        components={{
                          strong: ({node, ...props}) => <strong className="text-[#02109D] font-bold" {...props} />,
                          a: ({href, children, ...props}) => (
                            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {fixMarkdownLinks(resource.content || resource.title)}
                      </ReactMarkdown>
                    </div>
                    {showOpenResource && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 text-[#02109D] hover:text-[#F96570] font-medium underline"
                      >
                        {pageData?.btn_access_resource || "Open Resource"}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                    {showAccessResource && (
                      <Link
                        href={resourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#02109D] hover:text-[#F96570] font-medium flex items-center"
                      >
                        {pageData?.btn_access_resource || "Access Resource"} <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
