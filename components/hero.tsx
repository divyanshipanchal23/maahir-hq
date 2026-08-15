'use client'

import Image from 'next/image'
import { fireSixSeven } from './site-effects'
import { HeartDoodle, PawDoodle, SpiderMask, WebCorner, SpiderBug, Swoosh } from './icons'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16"
    >
      <WebCorner className="pointer-events-none absolute -left-6 -top-6 size-56 text-spidey-blue/25" />
      <WebCorner className="pointer-events-none absolute -right-6 bottom-0 size-56 rotate-180 text-spidey-red/25" />

      {/* floating spider doodles */}
      <SpiderBug className="float-spider left-[8%] top-[26%] size-10 text-spidey-red" style={{ animationDelay: '0s' }} />
      <SpiderBug className="float-spider right-[10%] top-[18%] size-8 text-spidey-blue" style={{ animationDelay: '1.2s' }} />
      <SpiderBug className="float-spider left-[45%] bottom-[12%] size-7 text-foreground" style={{ animationDelay: '2.4s' }} />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
        {/* Left: text */}
        <div className="order-2 md:order-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-spidey-red/50 bg-spidey-red/10 px-3 py-1 text-xs font-semibold text-spidey-red">
            <SpiderBug className="size-5" />
            Super HQ // Access Granted
          </div>
          <h1 className="font-display text-7xl font-bold leading-none tracking-tight text-foreground sm:text-8xl md:text-9xl">
            MAA<span className="text-spidey-red">HIR</span>
          </h1>
          <p className="mt-3 font-display text-xl font-semibold tracking-wide text-spidey-blue sm:text-2xl">
            Math Whiz. Web-Slinger. Future Inventor.
          </p>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Welcome to the official headquarters of the World&apos;s Greatest
            boy. Swing around and see if you
            can find the hidden spiders.
          </p>
        </div>

        {/* Right: pinned polaroid */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative rotate-[-4deg] transition-transform duration-200 ease-out sm:hover:rotate-2 sm:hover:scale-105">
            {/* tape corners */}
            <span className="absolute -left-4 -top-3 z-10 h-6 w-16 rotate-[-24deg] rounded-sm bg-white/25 backdrop-blur-sm" />
            <span className="absolute -right-4 -top-3 z-10 h-6 w-16 rotate-[24deg] rounded-sm bg-white/25 backdrop-blur-sm" />

            <div className="rounded-md bg-neutral-100 p-3 pb-14 shadow-2xl shadow-black/60 ring-1 ring-black/10">
              <div className="relative aspect-[3/4] w-56 overflow-hidden rounded-sm bg-neutral-200 sm:w-64">
                <Image
                  src="/images/maahir.jpg"
                  alt="Maahir smiling in his favorite t-shirt"
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* handwritten caption */}
              <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
                <HeartDoodle className="size-4 text-spidey-red" />
                <span
                  className="text-lg text-neutral-800"
                  style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 600, transform: 'rotate(-2deg)' }}
                >
                  Maahir — the smartest
                </span>
                <HeartDoodle className="size-4 text-spidey-red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
