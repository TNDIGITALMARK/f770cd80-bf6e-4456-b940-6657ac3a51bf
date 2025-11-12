import Image from 'next/image'
import { Navigation } from '@/components/portfolio/Navigation'
import { Footer } from '@/components/portfolio/Footer'

export default function AboutPage() {
  const skills = [
    'UI/UX Design',
    'Web Development',
    'Brand Identity',
    'User Research',
    'Prototyping',
    'Design Systems',
    'React & Next.js',
    'Figma & Adobe XD',
  ]

  const experience = [
    {
      year: '2020 - Present',
      role: 'Freelance Creative Director',
      description: 'Building digital experiences for startups and established companies.',
    },
    {
      year: '2018 - 2020',
      role: 'Design Lead at Studio',
      description: 'Led design team for various client projects across industries.',
    },
    {
      year: '2015 - 2018',
      role: 'UI/UX Designer',
      description: 'Started journey in digital design and user experience.',
    },
  ]

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        <section className="mx-auto max-w-[900px] px-8 py-16">
          <div className="rounded-lg bg-card p-12 shadow-md">
            {/* Header with Profile */}
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-tight">
                  About Me
                </h1>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  I'm a UX/UI designer and web developer based in San Francisco, California,
                  with 8 years of experience in digital design and branding. I specialize in
                  user experience design and brand identity development.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  My passion lies in creating intuitive, beautiful digital products that solve
                  real user problems. I believe in the power of design to transform businesses
                  and create meaningful connections between brands and their audiences.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative h-48 w-48 overflow-hidden rounded-full shadow-lg">
                  <Image
                    src="/generated/profile-headshot.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-12 border-t border-border pt-12">
              <h2 className="mb-6 text-2xl font-bold uppercase tracking-wide">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg bg-muted px-4 py-3 text-center text-sm font-medium text-foreground"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mb-12 border-t border-border pt-12">
              <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide">
                Experience
              </h2>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 text-sm font-semibold text-muted-foreground">
                        {item.year}
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="border-t border-border pt-12">
              <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide">
                What Clients Say
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-muted p-6">
                  <p className="mb-4 text-sm italic text-foreground">
                    "Outstanding creativity and professionalism. The project exceeded our
                    expectations and was delivered on time."
                  </p>
                  <div className="text-sm font-semibold text-muted-foreground">
                    Sarah Chen, CEO at TechStart
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-6">
                  <p className="mb-4 text-sm italic text-foreground">
                    "A talented designer who truly understands user needs. Highly recommend
                    for any digital project."
                  </p>
                  <div className="text-sm font-semibold text-muted-foreground">
                    Michael Roberts, Product Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
