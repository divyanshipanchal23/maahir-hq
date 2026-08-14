'use client'

import { useState } from 'react'
import type { SVGProps } from 'react'
import { Reveal } from './reveal'
import { SpiderBug } from './icons'
import Image from 'next/image'

function ChessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 3a3 3 0 1 1 6 0c0 1.5-1 2-1 3h-4c0-1-1-1.5-1-3Z" />
      <path d="M8 6h8l-1.5 6h-5L8 6Z" />
      <path d="M9.5 12l-1 5h7l-1-5M6 21h12M7 17h10" />
    </svg>
  )
}
function CraftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13.5 3.5 6 11l-2 6 6-2 7.5-7.5a2.12 2.12 0 0 0-3-3Z" />
      <path d="M11.5 5.5l3 3M6 11l3 3" />
    </svg>
  )
}
function BlockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5M12 12v10" />
    </svg>
  )
}

const hobbies = [
  {
    title: 'Playing Chess',
    desc: 'Plotting checkmates like a super-strategist.',
    Icon: ChessIcon,
    blue: false,
    rotate: '-3deg',
    id: 'chess',
  },
  {
    title: 'Crafting',
    desc: 'Building cool creations with his own two hands.',
    Icon: CraftIcon,
    blue: true,
    rotate: '2.5deg',
    id: 'craft',
  },
  {
    title: 'Minecraft with Bunnu Mamaji',
    desc: 'Team-building epic worlds, block by block.',
    Icon: BlockIcon,
    blue: false,
    rotate: '-1.5deg',
    id: 'minecraft',
  },
]

export function Hobbies() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="hobbies" className="relative px-5 py-20">
      {/* web strand connecting from the top */}
      <div className="mx-auto mb-10 h-0.5 w-2/3 max-w-md web-strand" aria-hidden="true" />
      <SpiderBug className="float-spider left-[5%] top-[10%] size-10 text-spidey-red" />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-spidey-blue">
            Off-Duty Powers
          </p>
          <h2 className="mt-2 flex items-center gap-3 font-display text-5xl font-bold tracking-wide text-foreground sm:text-6xl">
            <span className="heading-pop">Hobby HQ</span>
            <SpiderBug className="size-9 text-spidey-blue" />
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {hobbies.map((h, i) => {
            const accent = h.blue ? 'text-spidey-blue' : 'text-spidey-red'
            const fill = h.blue ? 'bg-spidey-blue/15' : 'bg-spidey-red/15'
            return (
              <Reveal key={h.title} delay={i * 120}>
                <button
                  type="button"
                  onClick={() => h.id === 'minecraft' && setModalOpen(true)}
                  className={`wiggle-parent sticker ${accent} ${fill} flex h-full w-full flex-col items-center p-7 text-center ${h.id === 'minecraft' ? 'cursor-pointer hover:border-spidey-red' : 'cursor-default'}`}
                  style={{ transform: `rotate(${h.rotate})` }}
                >
                  <div
                    className={`wiggle-target mx-auto mb-5 flex size-24 items-center justify-center rounded-full border-4 border-background ${h.blue ? 'bg-spidey-blue text-background' : 'bg-spidey-red text-background'} shadow-lg`}
                  >
                    <h.Icon className="size-12" />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-wide text-foreground">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {h.desc}
                  </p>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>

      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative max-w-sm rotate-2 rounded-md bg-white p-3 pb-16 shadow-2xl transition-transform hover:rotate-0" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -right-4 -top-4 flex size-10 items-center justify-center rounded-full bg-spidey-red font-bold text-white shadow-lg transition-transform hover:scale-110"
              onClick={() => setModalOpen(false)}
            >
              X
            </button>
            <div className="relative aspect-square w-full overflow-hidden bg-neutral-200">
              <img 
                src="/images/bunnu-mamaji.jpg" 
                alt="Maahir and Bunnu Mamaji playing Minecraft" 
                className="h-full w-full object-cover" 
              />
            </div>
            <div className="absolute inset-x-0 bottom-4 text-center font-display text-xl font-bold text-neutral-800" style={{ transform: 'rotate(-2deg)' }}>
              Mission: Minecraft
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
