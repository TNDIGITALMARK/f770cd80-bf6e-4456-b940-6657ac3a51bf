import { Navigation } from '@/components/portfolio/Navigation'
import { Footer } from '@/components/portfolio/Footer'
import { ProjectCard } from '@/components/portfolio/ProjectCard'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-commerce Redesign',
      description: 'Fashion startup platform redesign that increased conversions by 40%. Complete UI/UX overhaul with modern design patterns.',
      image: '/generated/project-ecommerce.png',
      tags: ['UI/UX', 'Web Design', 'E-commerce'],
    },
    {
      title: 'Mobile Fitness App',
      description: 'Activity tracking mobile application with 50,000+ downloads. Intuitive interface for workout logging and progress tracking.',
      image: '/generated/project-fitness-app.png',
      tags: ['Mobile', 'App Design', 'Health & Fitness'],
    },
    {
      title: 'SaaS Brand Identity',
      description: 'Complete corporate rebrand for tech company including logo, website, and comprehensive marketing materials.',
      image: '/generated/project-saas-brand.png',
      tags: ['Branding', 'Web', 'Identity'],
    },
    {
      title: 'Analytics Dashboard',
      description: 'Modern dashboard interface for data visualization with real-time metrics and interactive charts.',
      image: '/generated/project-dashboard.png',
      tags: ['UI/UX', 'Dashboard', 'Data Viz'],
    },
  ]

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        <section className="mx-auto max-w-[900px] px-8 py-16">
          <div className="rounded-lg bg-card p-12 shadow-md">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-tight">
                Portfolio
              </h1>
              <p className="text-base text-muted-foreground">
                A showcase of selected projects demonstrating expertise in digital design and development.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 border-t border-border pt-12 text-center">
              <h2 className="mb-4 text-2xl font-bold">
                Interested in working together?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Let's discuss how I can help bring your project to life.
              </p>
              <a
                href="/contact"
                className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
