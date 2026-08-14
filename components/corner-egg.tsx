'use client'

import { useState } from 'react'
import { SpiderBug } from './icons'
import { fireSixSeven } from './site-effects'

export function CornerEgg() {
  const [hint, setHint] = useState(false)

  return (
    <button
      type="button"
      aria-label="Secret spider"
      onClick={fireSixSeven}
      onMouseEnter={() => setHint(true)}
      onMouseLeave={() => setHint(false)}
      className="fixed bottom-4 left-4 z-40 flex items-center gap-2 opacity-40 transition-opacity hover:opacity-100"
    >
      <SpiderBug className="size-8 text-spidey-red transition-transform hover:-translate-y-1 hover:scale-125 hover:rotate-12" />
      {hint && (
        <span className="rounded-full border border-white/10 bg-background/80 px-2 py-1 text-[10px] font-medium text-muted-foreground backdrop-blur">
          psst… tap me
        </span>
      )}
    </button>
  )
}
