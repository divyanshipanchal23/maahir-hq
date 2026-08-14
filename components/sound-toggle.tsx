'use client'

import { useEffect, useState } from 'react'
import { getMuted, setMuted, playThwip } from '@/lib/sfx'

function SpeakerOn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  )
}
function SpeakerOff() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="m23 9-6 6M17 9l6 6" />
    </svg>
  )
}

export function SoundToggle() {
  const [muted, setMutedState] = useState(false)

  useEffect(() => {
    setMutedState(getMuted())
  }, [])

  const toggle = () => {
    const next = !muted
    setMuted(next)
    setMutedState(next)
    if (!next) playThwip() // give a little confirmation blip when turning on
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
      aria-pressed={!muted}
      className="fixed bottom-4 right-4 z-40 flex size-11 items-center justify-center rounded-full border-2 border-spidey-red/50 bg-background/80 text-spidey-red shadow-lg shadow-black/40 backdrop-blur transition-transform hover:scale-110 active:scale-90"
    >
      {muted ? <SpeakerOff /> : <SpeakerOn />}
    </button>
  )
}
