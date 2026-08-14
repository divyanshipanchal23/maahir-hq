import { BigWeb, SpiderBug } from './icons'

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/10 px-5 py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spidey-red to-transparent shadow-[0_0_16px_var(--spidey-red-glow)]" />

      {/* big friendly corner webs */}
      <BigWeb className="pointer-events-none absolute -left-10 -top-10 size-40 text-spidey-blue/20" />
      <BigWeb className="pointer-events-none absolute -right-10 -bottom-10 size-40 text-spidey-red/20" />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <div className="relative">
          <BigWeb className="size-24 text-spidey-red/70" />
          <SpiderBug className="absolute inset-0 m-auto size-10 text-spidey-red" />
        </div>
        <p className="text-sm font-display font-semibold tracking-widest text-muted-foreground uppercase">
          Maahir <span aria-hidden="true" className="ml-2">🕷️</span>
        </p>
      </div>
    </footer>
  )
}
