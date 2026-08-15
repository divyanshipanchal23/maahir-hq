'use client'

import { useState } from 'react'
import { Reveal } from './reveal'
import { SpiderBug, WebSpin } from './icons'
import { fireThwip } from './site-effects'

type Status = 'progress' | 'todo'

type Mission = {
  text: string
  status: Status
  badge?: string
}

const initialMissions: Mission[] = [
  { text: 'Get a new monitor', status: 'progress' },
  { text: 'Get a Dublin water bottle', status: 'todo' },
  { text: 'Get an Alexa', status: 'todo' },
  { text: 'Get a wireless mouse', status: 'progress' },
  { text: 'Do pottery', status: 'todo' },
  { text: 'Get a light-up (RGB) keyboard', status: 'todo' },
  { text: 'Get a sniper pen', status: 'todo' },
  { text: 'Visit France', status: 'todo' },
  { text: 'Lose 2 kg', status: 'todo' },
  { text: 'Get a new cycle', status: 'todo' },
  { text: 'Get a PS8', status: 'todo', badge: 'Coming in 2050 😄' },
  { text: 'Invent new things', status: 'todo' },
  { text: 'Go swimming every Saturday–Sunday', status: 'todo' },
  { text: 'Get a laptop cover', status: 'todo' },
]

export function MissionList() {
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const toggle = (i: number) => {
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }))
    fireThwip()
  }

  return (
    <section id="mission" className="relative px-5 py-20">
      {/* web strand connecting from the top */}
      <div className="mx-auto mb-10 h-0.5 w-2/3 max-w-md web-strand" aria-hidden="true" />
      <SpiderBug className="float-spider right-[7%] top-[9%] size-10 text-spidey-red" />

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-spidey-red">
            Objectives // Priority
          </p>
          <h2 className="mt-2 flex items-center gap-3 font-display text-5xl font-bold tracking-wide text-foreground sm:text-6xl">
            <span className="heading-pop">Missions</span>
            <SpiderBug className="size-9 text-spidey-red" />
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every super-agent needs goals. Tap a spider to lock onto a target!
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-8 flex max-h-[540px] flex-col gap-3 overflow-y-auto rounded-[28px] border-2 border-white/10 bg-black/20 p-4">
            {initialMissions.map((m, i) => {
              const isChecked = checked[i]
              return (
                <li key={m.text}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="glow-card group flex w-full items-center gap-4 p-4 text-left"
                  >
                    {/* spider bullet */}
                    <span className="relative flex size-11 shrink-0 items-center justify-center">
                      <SpiderBug
                        className={`transition-[transform,color,filter] duration-200 cubic-bezier(0.16,1,0.3,1) active:scale-90 ${
                          isChecked
                            ? 'size-11 text-spidey-red drop-shadow-[0_0_10px_var(--spidey-red-glow)] scale-110'
                            : m.status === 'progress'
                              ? 'size-9 text-spidey-blue'
                              : 'size-8 text-muted-foreground group-hover:scale-125 group-hover:text-foreground'
                        }`}
                      />
                    </span>

                    <span className="flex-1">
                      <span
                        className={`block font-display text-lg font-semibold sm:text-xl ${
                          isChecked
                            ? 'text-muted-foreground line-through'
                            : 'text-foreground'
                        }`}
                      >
                        {m.text}
                        {m.badge && (
                          <span className="ml-2 inline-block rounded-full border-2 border-spidey-blue/50 bg-spidey-blue/15 px-2.5 py-0.5 align-middle text-[11px] font-semibold tracking-wide text-spidey-blue">
                            {m.badge}
                          </span>
                        )}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
