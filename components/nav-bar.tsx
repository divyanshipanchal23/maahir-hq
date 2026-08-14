'use client'

import Image from 'next/image'
import { SpiderBug } from './icons'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#mission', label: 'Missions' },
]

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/70 px-3 py-2 backdrop-blur-md shadow-lg shadow-black/40">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-full border border-spidey-red/60">
            <Image
              src="/images/maahir.jpg"
              alt="Maahir"
              fill
              sizes="36px"
              className="object-cover object-top"
            />
          </span>
          <span className="hidden items-center gap-1.5 font-display text-lg font-bold tracking-wide text-foreground sm:flex">
            MAAHIR<span className="text-spidey-red">.HQ</span>
            <SpiderBug className="size-5 text-spidey-red" />
          </span>
          <SpiderBug className="size-6 text-spidey-red sm:hidden" />
        </a>
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground sm:text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
