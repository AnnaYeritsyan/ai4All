"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02109D] to-[#F96570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-[#AEE9EC] leading-relaxed">
              Get in touch with the AI4ALL team. We're here to help you on your artificial intelligence journey.
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
                  <h2 className="text-2xl font-bold text-[#02109D] mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D] focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D] focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Category
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D] focus:border-transparent"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="education">Education Programs</option>
                          <option value="business">Business Solutions</option>
                          <option value="partnership">Partnership</option>
                          <option value="media">Media & Press</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D] focus:border-transparent"
                          placeholder="Brief subject of your message"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02109D] focus:border-transparent"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="bg-[#02109D] hover:bg-[#02109D]/90">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
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
                  <h3 className="text-xl font-bold text-[#02109D] mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#F96570] mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">
                          Enterprise Incubator Foundation
                          <br />
                          Yerevan, Armenia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-[#9FFEE4] mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+374 XX XXX XXX</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-[#AEE9EC] mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">info@eif.am</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#02109D] mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Office Hours</p>
                        <p className="text-gray-600">
                          Monday - Friday
                          <br />
                          9:00 AM - 6:00 PM (AMT)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-gradient-to-br from-[#AEE9EC] to-[#9FFEE4]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#02109D] mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-[#02109D] mb-1">For Educators</h4>
                      <p className="text-[#02109D]/80 text-sm">Learn about our teacher training programs</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#02109D] mb-1">For Businesses</h4>
                      <p className="text-[#02109D]/80 text-sm">Discover AI automation solutions</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#02109D] mb-1">For Students</h4>
                      <p className="text-[#02109D]/80 text-sm">Explore AI learning opportunities</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#02109D] mb-1">For Professionals</h4>
                      <p className="text-[#02109D]/80 text-sm">Advance your AI skills</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#02109D] mb-4">Frequently Asked</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">How can I join AI4ALL programs?</h4>
                      <p className="text-gray-600 text-sm">
                        Contact us to learn about current enrollment opportunities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Do you offer corporate training?</h4>
                      <p className="text-gray-600 text-sm">Yes, we provide customized AI training for businesses.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Are programs available in Armenian?</h4>
                      <p className="text-gray-600 text-sm">We offer programs in both Armenian and English.</p>
                    </div>
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
