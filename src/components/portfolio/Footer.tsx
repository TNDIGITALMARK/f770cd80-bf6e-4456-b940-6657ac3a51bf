import { Github, Linkedin, Link2 } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-[900px] px-8 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-foreground">
              johnsmith@example.com
            </p>
            <p className="text-sm text-muted-foreground">
              +1 (415) 555-0123
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Website"
            >
              <Link2 className="h-5 w-5" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <p className="text-sm font-medium text-foreground">Quick Links</p>
            <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                HOME
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                ABOUT
              </Link>
              <Link href="/projects" className="hover:text-foreground transition-colors">
                PROJECTS
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
