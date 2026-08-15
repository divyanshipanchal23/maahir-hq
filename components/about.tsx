import type { SVGProps } from 'react'
import { Reveal } from './reveal'
import { SpiderBug } from './icons'

function CalcIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <rect x="7" y="5" width="10" height="4" rx="1" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" />
    </svg>
  )
}
function DropIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13Z" opacity="0.9" />
    </svg>
  )
}
function FilmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M3 15h18M8 4v16M16 4v16" />
    </svg>
  )
}

const stats = [
  {
    label: 'Favorite Subject',
    value: 'Math',
    sub: 'Numbers = Superpower',
    Icon: CalcIcon,
    color: 'text-spidey-red',
    blue: false,
  },
  {
    label: 'Favorite Color',
    value: 'Blue',
    sub: 'Deep hero blue',
    Icon: DropIcon,
    color: 'text-spidey-blue',
    blue: true,
  },
  {
    label: 'Favorite Movie',
    value: 'Spider-Man',
    sub: 'Web-slinger approved',
    Icon: FilmIcon,
    color: 'text-spidey-red',
    blue: false,
  },
]

export function About() {
  return (
    <section id="about" className="relative px-5 py-20">
      {/* web strand connecting from the top */}
      <div className="mx-auto mb-10 h-0.5 w-2/3 max-w-md web-strand" aria-hidden="true" />
      <SpiderBug className="float-spider right-[6%] top-[8%] size-9 text-spidey-blue" />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-spidey-red">
            Character Stats
          </p>
          <h2 className="mt-2 flex items-center gap-3 font-display text-5xl font-bold tracking-wide text-foreground sm:text-6xl">
            <span className="heading-pop">Meet Maahir</span>
            <SpiderBug className="size-9 text-spidey-red" />
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Every hero has a stat screen. Here&apos;s what powers up Maahir.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="group relative flex items-center gap-6 rounded-2xl border border-white/5 bg-black/40 p-4 transition-colors hover:bg-black/60">
                <div className={`flex size-14 shrink-0 items-center justify-center rounded-xl bg-black/50 ${s.color}`}>
                  <s.Icon className="size-8 transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="font-display text-2xl font-bold tracking-wide text-foreground">
                      {s.label}
                    </h3>
                    <span className={`font-display text-xl font-semibold ${s.color}`}>
                      {s.value}
                    </span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/5">
                    <div 
                      className={`absolute inset-y-0 left-0 w-full origin-left rounded-full transition-transform duration-700 ease-out ${s.blue ? 'bg-spidey-blue shadow-[0_0_10px_var(--spidey-blue-glow)]' : 'bg-spidey-red shadow-[0_0_10px_var(--spidey-red-glow)]'}`}
                      style={{ transform: 'scaleX(0.85)' }}
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {s.sub}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

