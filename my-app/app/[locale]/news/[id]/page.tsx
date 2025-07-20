'use client'

import { useNewsInfos } from "@/app/api/content/useNews";
import { useLocale } from "@/app/api/hooks/useLocale";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";

export default function NewsDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const { data: newsInfos } = useNewsInfos(locale);
  const newsItem = Array.isArray(newsInfos) ? newsInfos.find((item) => String(item.documentId) === String(params.id)) : null;

  if (!newsItem) return <div className="max-w-3xl mx-auto py-12 text-center text-gray-400">Not found</div>;

  const dateMatch = newsItem.content.match(/<u>(.*?)<\/u>/);
  const customDate = dateMatch ? dateMatch[1] : null;

  const contentWithoutDate = newsItem.content.replace(/<u>.*?<\/u>/, "");

  return (
    <div className="flex justify-center py-12 px-2">
      <Card className="max-w-3xl w-full shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#02109D] text-center">
            {newsItem.content.split('\n')[0].replace(/\*\*/g, "")}
          </h1>
          <div className="text-center text-gray-400 text-sm mb-8">
            {customDate || (newsItem.createdAt && new Date(newsItem.createdAt).toLocaleDateString())}
          </div>
          <div className="prose max-w-none mx-auto">
            <ReactMarkdown
              components={{
                strong: ({node, ...props}) => <strong className="text-[#02109D] font-bold" {...props} />,
                a: (props) => (
                  <a {...props} target="_blank" rel="noopener noreferrer">
                    {props.children}
                  </a>
                ),
              }}
            >
              {contentWithoutDate}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
