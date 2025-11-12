import Image from 'next/image'
import Link from 'next/link'
import { Pen, Lightbulb } from 'lucide-react'
import { Navigation } from '@/components/portfolio/Navigation'
import { Footer } from '@/components/portfolio/Footer'
import { ProjectCard } from '@/components/portfolio/ProjectCard'

export default function HomePage() {
  const projects = [
    {
      title: 'E-commerce Redesign',
      image: '/generated/project-ecommerce.png',
      tags: ['UI/UX', 'Web Design'],
    },
    {
      title: 'Mobile App Concept',
      image: '/generated/project-fitness-app.png',
      tags: ['Mobile', 'App Design'],
    },
    {
      title: 'SaaS Platform Build',
      image: '/generated/project-saas-brand.png',
      tags: ['Branding', 'Web'],
    },
    {
      title: 'Dashboard Interface',
      image: '/generated/project-dashboard.png',
      tags: ['UI/UX', 'Dashboard'],
    },
  ]

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="mx-auto max-w-[900px] px-8 py-16">
          <div className="rounded-lg bg-card p-12 shadow-md">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left: Hero Content */}
              <div className="flex flex-col justify-center">
                <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-tight lg:text-5xl">
                  Creative Solutions for Digital Presence
                </h1>
                <p className="text-base text-muted-foreground">
                  Transforming Ideas into Visually Stunning Experiences.
                </p>
              </div>

              {/* Right: Profile Image */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-lg">
                  <Image
                    src="/generated/profile-headshot.png"
                    alt="John Smith - Creative Director"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold uppercase tracking-wide">About</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I am UX/UI designer and web developer passionate about crafting user-friendly and aesthetically pleasing digital products.
                </p>
              </div>

              <div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">2015: Started Design Journey</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">2018: Launched First Agency</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">2020: Freelance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="mt-16">
              <h2 className="mb-6 text-xl font-bold uppercase tracking-wide">Projects</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="mt-16">
              <div className="mb-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Ready to start your project?
                </p>
              </div>

              <div className="flex flex-col items-center gap-8">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Let's Work Together
                </Link>

                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Pen className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Web Development
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Clean code & Functional
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Lightbulb className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Branding & Strategy
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Stand out & Unique
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 border-t border-border pt-8">
              <h2 className="mb-6 text-xl font-bold uppercase tracking-wide">Contact</h2>
              <div className="flex flex-col gap-4 text-sm">
                <p className="text-foreground">johnsmith@example.com</p>
                <p className="text-muted-foreground">+1 (415) 555-0123</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}