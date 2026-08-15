'use client'

import { useEffect, useRef, useState } from 'react'
import { CursorWeb, Spider, SpiderBug } from './icons'
import { playBoing, playThwip } from '@/lib/sfx'

/* dispatch helpers used across the site */
export function fireSixSeven() {
  window.dispatchEvent(new CustomEvent('maahir:sixseven'))
}
export function fireSwing() {
  window.dispatchEvent(new CustomEvent('maahir:swing'))
}
export function fireThwip() {
  window.dispatchEvent(new CustomEvent('maahir:thwip'))
}

export function SiteEffects() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [pressed, setPressed] = useState(false)
  const [sixSeven, setSixSeven] = useState(0)
  const [swing, setSwing] = useState(0)
  const [spiderKey, setSpiderKey] = useState(0)

  /* custom cursor follow + thwip on click with rAF */
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    const inner = innerRef.current
    if (!el) return

    let rafId: number | null = null
    let latestX = -100
    let latestY = -100

    const updatePosition = () => {
      el.style.transform = `translate3d(${latestX}px, ${latestY}px, 0)`
      rafId = null
    }

    const move = (e: MouseEvent) => {
      latestX = e.clientX
      latestY = e.clientY
      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition)
      }
    }

    const down = () => {
      if (inner) inner.style.transform = 'translate(-50%, -50%) scale(0.75)'
    }

    const up = () => {
      if (inner) inner.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  /* random dangling spider every 15-20s */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const schedule = () => {
      const delay = 15000 + Math.random() * 5000
      timer = setTimeout(() => {
        setSpiderKey((k) => k + 1)
        schedule()
      }, delay)
    }
    schedule()
    return () => clearTimeout(timer)
  }, [])

  /* listen for triggered easter eggs */
  useEffect(() => {
    const onSix = () => {
      setSixSeven((n) => n + 1)
      playBoing()
    }
    const onSwing = () => setSwing((n) => n + 1)
    const onThwip = () => playThwip()
    window.addEventListener('maahir:sixseven', onSix)
    window.addEventListener('maahir:swing', onSwing)
    window.addEventListener('maahir:thwip', onThwip)
    return () => {
      window.removeEventListener('maahir:sixseven', onSix)
      window.removeEventListener('maahir:swing', onSwing)
      window.removeEventListener('maahir:thwip', onThwip)
    }
  }, [])

  /* konami: arrow sequence OR typing "spidey" */
  useEffect(() => {
    const konami = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    ]
    let kIdx = 0
    let typed = ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === konami[kIdx]) {
        kIdx++
        if (kIdx === konami.length) {
          fireSwing()
          playThwip()
          kIdx = 0
        }
      } else {
        kIdx = e.key === konami[0] ? 1 : 0
      }
      if (e.key.length === 1) {
        typed = (typed + e.key.toLowerCase()).slice(-6)
        if (typed.includes('spidey')) {
          fireSwing()
          playThwip()
          typed = ''
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* custom cursor */}
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
        <div
          ref={innerRef}
          style={{
            transform: 'translate(-50%, -50%) scale(1)',
            transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <CursorWeb />
        </div>
      </div>

      {/* crawling spiders along the page edges */}
      <div className="crawler crawler-top" aria-hidden="true">
        <SpiderBug width={26} height={26} className="legs text-foreground" />
      </div>
      <div className="crawler crawler-bottom" aria-hidden="true">
        <SpiderBug width={22} height={22} className="legs text-foreground" />
      </div>

      {/* random dangling spider */}
      {spiderKey > 0 && (
        <div
          key={spiderKey}
          className="spider-drop"
          style={{ left: `${10 + ((spiderKey * 37) % 80)}%` }}
          aria-hidden="true"
        >
          <div className="thread" />
          <Spider width={30} height={30} className="text-foreground -mt-1" />
        </div>
      )}

      {/* 6...7 seesaw gag */}
      {sixSeven > 0 && (
        <div key={`s-${sixSeven}`} className="six-seven-wrap" aria-hidden="true">
          <span className="num6">6</span>
          <span className="num7">7</span>
        </div>
      )}

      {/* Konami full-screen web-swing */}
      {swing > 0 && (
        <div key={`sw-${swing}`} className="swing-overlay" aria-hidden="true">
          <div className="swing-line" />
          <div className="swinger">
            <Spider width={64} height={64} className="text-spidey-red" />
          </div>
        </div>
      )}
    </>
  )
}
