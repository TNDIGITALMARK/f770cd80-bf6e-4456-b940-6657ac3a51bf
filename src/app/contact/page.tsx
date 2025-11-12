"use client"

import { useState } from 'react'
import { Navigation } from '@/components/portfolio/Navigation'
import { Footer } from '@/components/portfolio/Footer'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In a real application, you would send the data to a backend
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        <section className="mx-auto max-w-[900px] px-8 py-16">
          <div className="rounded-lg bg-card p-12 shadow-md">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-tight">
                Get In Touch
              </h1>
              <p className="text-base text-muted-foreground">
                Have a project in mind? Let's discuss how we can work together to bring your
                vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="mb-6 text-xl font-bold uppercase tracking-wide">
                    Contact Info
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Email</div>
                        <div className="text-sm text-muted-foreground">
                          johnsmith@example.com
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Phone</div>
                        <div className="text-sm text-muted-foreground">
                          +1 (415) 555-0123
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Location</div>
                        <div className="text-sm text-muted-foreground">
                          San Francisco, California
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-6">
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">
                    Response Time
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-xl font-bold uppercase tracking-wide">
                  Send a Message
                </h2>

                {submitted && (
                  <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-800">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a type</option>
                        <option value="web-design">Web Design</option>
                        <option value="app-design">App Design</option>
                        <option value="branding">Branding</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
