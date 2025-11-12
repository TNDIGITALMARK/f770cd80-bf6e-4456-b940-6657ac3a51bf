import { Navigation } from '@/components/portfolio/Navigation'
import { Footer } from '@/components/portfolio/Footer'
import { Pen, Lightbulb, Layout, Smartphone, Palette, Code2 } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Layout,
      title: 'Web Design',
      description:
        'Creating beautiful, responsive websites that engage users and drive conversions. From landing pages to complex web applications.',
      features: ['Responsive Design', 'User-Centric Approach', 'Modern Aesthetics'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description:
        'Designing intuitive mobile experiences for iOS and Android platforms that users love. Focus on usability and visual appeal.',
      features: ['Native & Cross-Platform', 'Prototyping', 'User Testing'],
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description:
        'Developing cohesive brand identities that communicate your values and resonate with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Systems'],
    },
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'Building fast, scalable web applications with modern technologies. Clean code and functional implementations.',
      features: ['React & Next.js', 'Performance Optimization', 'SEO Ready'],
    },
    {
      icon: Pen,
      title: 'UI/UX Design',
      description:
        'Creating user interfaces that are both beautiful and functional. Research-driven design process for optimal user experience.',
      features: ['User Research', 'Wireframing', 'Visual Design'],
    },
    {
      icon: Lightbulb,
      title: 'Design Strategy',
      description:
        'Strategic design consulting to help your business stand out. Aligning design decisions with business goals.',
      features: ['Design Audits', 'Competitor Analysis', 'Design Systems'],
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description:
        'Understanding your business goals, target audience, and project requirements.',
    },
    {
      step: '02',
      title: 'Strategy',
      description:
        'Developing a comprehensive design strategy aligned with your objectives.',
    },
    {
      step: '03',
      title: 'Design',
      description:
        'Creating high-fidelity designs and prototypes for review and iteration.',
    },
    {
      step: '04',
      title: 'Development',
      description:
        'Building the final product with clean code and attention to detail.',
    },
    {
      step: '05',
      title: 'Launch',
      description:
        'Deploying your project and ensuring everything works perfectly.',
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
                Services
              </h1>
              <p className="text-base text-muted-foreground">
                Comprehensive design and development services to help your business thrive in
                the digital landscape.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="rounded-lg border border-border p-6 transition-all hover:border-primary hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            {/* Process Section */}
            <div className="mb-16 border-t border-border pt-12">
              <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide">
                My Process
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                {process.map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="mb-3 text-3xl font-bold text-primary">{item.step}</div>
                    <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="border-t border-border pt-12 text-center">
              <h2 className="mb-4 text-2xl font-bold">Ready to start your project?</h2>
              <p className="mb-6 text-muted-foreground">
                Let's discuss how I can help bring your vision to life.
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
