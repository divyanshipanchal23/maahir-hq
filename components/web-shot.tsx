'use client'

import { useEffect, useState } from 'react'
import { BigWeb } from './icons'
import { playWebShootSound } from '@/lib/sfx'

export function WebShot() {
  const [webs, setWebs] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't trigger if clicking on interactive elements or cards
      const target = e.target as HTMLElement
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.glow-card') ||
        target.closest('.sticker')
      ) {
        return
      }

      playWebShootSound()

      const id = Date.now()
      setWebs((prev) => [...prev, { id, x: e.clientX, y: e.clientY }])
      
      // Remove after animation finishes
      setTimeout(() => {
        setWebs((prev) => prev.filter((w) => w.id !== id))
      }, 700)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[110] overflow-hidden">
      {webs.map((web) => (
        <div
          key={web.id}
          className="absolute flex items-center justify-center"
          style={{ left: web.x, top: web.y, transform: 'translate(-50%, -50%)' }}
        >
          <BigWeb className="size-32 animate-web-burst text-white/50 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          {/* center impact */}
          <div className="absolute size-4 animate-ping rounded-full bg-white/70 blur-sm" />
        </div>
      ))}
    </div>
  )
}

