"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from "lucide-react"
import { useContactPage } from "@/app/api/content/useContactContent";
import { useLocale } from "@/app/api/hooks/useLocale";
import { useNewsInfos } from "@/app/api/content/useNews";
import { formatDate } from "@formatjs/intl"

export default function ContactPage() {
  const locale = useLocale();
  const { data: contactPage } = useContactPage(locale);
  const { data: newsInfos } = useNewsInfos(locale);
  const contactSource = contactPage?.locale === locale
    ? contactPage
    : contactPage?.localizations?.find((loc: any) => loc.locale === locale) || contactPage;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const faqs = contactSource?.faq || (
    locale === 'hy'
      ? [
          {
            question: "Ինչպե՞ս կարող եմ միանալ AI4ALL ծրագրերին։",
            answer: "Կապվեք մեզ հետ՝ տեղեկանալու ընթացիկ գրանցումների մասին։"
          },
          {
            question: "Արդյո՞ք դուք առաջարկում եք կորպորատիվ վերապատրաստում։",
            answer: "Այո, մենք տրամադրում ենք անհատականացված ԱԲ վերապատրաստում բիզնեսների համար։"
          },
          {
            question: "Ծրագրերը հասանելի՞ են հայերենով։",
            answer: "Մենք առաջարկում ենք ծրագրեր ինչպես հայերեն, այնպես էլ անգլերեն։"
          }
        ]
      : [
          {
            question: "How can I join AI4ALL programs?",
            answer: "Contact us to learn about current enrollment opportunities."
          },
          {
            question: "Do you offer corporate training?",
            answer: "Yes, we provide customized AI training for businesses."
          },
          {
            question: "Are programs available in Armenian?",
            answer: "We offer programs in both Armenian and English."
          }
        ]
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02109D] to-[#F96570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{contactSource?.title || "Contact Us"}</h1>
            <p className="text-xl text-[#AEE9EC] leading-relaxed">
              {contactSource?.description || "Get in touch with the AI4ALL team. We're here to help you on your artificial intelligence journey."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#02109D] mb-6">{contactSource?.sendus_title || "Send us a Message"}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {contactSource?.name || "Full Name *"}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D] focus:border-transparent"
                          placeholder={contactSource?.name || "Your full name"}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {contactSource?.email_title || "Email Address *"}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D] focus:border-transparent"
                          placeholder={contactSource?.email_title || "your.email@example.com"}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          {contactSource?.subject_title || "Subject *"}
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D] focus:border-transparent"
                          placeholder={contactSource?.subject_title || "Brief subject of your message"}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {contactSource?.message_title || "Message *"}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D] focus:border-transparent"
                        placeholder={contactSource?.message_title || "Please provide details about your inquiry..."}
                      />
                    </div>

                    <Button type="submit" size="lg" className="bg-[#02109D] hover:bg-[#02109D]/90">
                      <Send className="w-4 h-4 mr-2" />
                      {contactSource?.btn_send_mesage || "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#02109D] mb-6">{contactSource?.conatct_info_title || "Contact Information"}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#F96570] mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">{contactSource?.address_title || "Address"}</p>
                        <p className="text-gray-600">
                          {contactSource?.address || "Enterprise Incubator Foundation\nYerevan, Armenia"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-[#9FFEE4] mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">{contactSource?.phone_title || "Phone"}</p>
                        <p className="text-gray-600">{contactSource?.phones || "+374 XX XXX XXX"}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-[#AEE9EC] mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">{contactSource?.email_title || "Email"}</p>
                        <p className="text-gray-600">{contactSource?.email || "wave@eif.am"}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div>
                        <p className="font-medium text-gray-900">{contactSource?.office_hourse_title || "Office Hours"}</p>
                        <p className="text-gray-600">
                          {contactSource?.office_hourse || "Monday - Friday\n9:00 AM - 6:00 PM (AMT)"}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-gradient-to-br from-[#AEE9EC] to-[#9FFEE4]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#02109D] mb-4">{contactSource?.quick_links || "Quick Links"}</h3>
                  <div className="flex space-x-4 mb-6">
                    {contactSource?.facebook && (
                      <a href={contactSource.facebook} target="_blank" rel="noopener noreferrer" className="text-[#02109D] hover:text-[#F96570]">
                        <Facebook className="w-6 h-6" />
                      </a>
                    )}
                    {contactSource?.instagram && (
                      <a href={contactSource.instagram} target="_blank" rel="noopener noreferrer" className="text-[#02109D] hover:text-[#F96570]">
                        <Instagram className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#02109D] mb-4">News</h3>
                  <div className="space-y-4">
                    {Array.isArray(newsInfos) && newsInfos.slice(0, 3).map((item) => (
                      <div key={item.documentId || item.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <a
                          href={`/${locale}/news/${item.documentId || item.id}`}
                          className="block text-[#02109D] hover:text-[#F96570] font-medium"
                          target="_self"
                        >
                          <h4 className="font-medium mb-1 line-clamp-2">
                            {item.content.split('\n')[0].replace(/\*\*/g, "")}
                          </h4>
                          <div className="flex items-center text-gray-500 text-xs">
                            {/* <span>{item.createdAt ? formatDate(item.createdAt) : ""}</span> */}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#02109D] mb-4">
                    {contactSource?.faq_title || (locale === "hy" ? "Հաճախ տրվող հարցեր" : "Frequently Asked")}
                  </h3>
                  <div className="space-y-3">
                    {faqs.map((faq:any, idx:number) => (
                      <div key={idx}>
                        <h4 className="font-medium text-gray-900 mb-1">{faq.question}</h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
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
