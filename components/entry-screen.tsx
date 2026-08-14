'use client'

import { useState } from 'react'
import { SpiderMask, SpiderBug } from './icons'
import { fireThwip } from './site-effects'

export function EntryScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [animatingOut, setAnimatingOut] = useState(false)
  const [attempt, setAttempt] = useState('')
  const [error, setError] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault()
    const ans = attempt.toLowerCase().replace(/[^a-z]/g, '')
    if (ans === 'spiderman') {
      fireThwip()
      setAnimatingOut(true)
      setTimeout(() => setUnlocked(true), 1200) // wait for vault animation
    } else {
      setError(true)
      setShowHint(true)
      setTimeout(() => setError(false), 500)
    }
  }

  if (unlocked) {
    return <>{children}</>
  }

  return (
    <>
      {children}
      <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none">
        {/* Left Vault Door */}
        <div className={`absolute inset-y-0 left-0 w-1/2 bg-black transition-transform duration-1000 ease-in-out pointer-events-auto border-r-4 border-spidey-red/50 flex flex-col justify-center items-end ${animatingOut ? '-translate-x-full' : 'translate-x-0'}`}>
           <div className="mr-1 h-16 w-4 rounded-l-md bg-spidey-red/50 opacity-50" />
        </div>
        
        {/* Right Vault Door */}
        <div className={`absolute inset-y-0 right-0 w-1/2 bg-black transition-transform duration-1000 ease-in-out pointer-events-auto border-l-4 border-spidey-red/50 flex flex-col justify-center items-start ${animatingOut ? 'translate-x-full' : 'translate-x-0'}`}>
           <div className="ml-1 h-16 w-4 rounded-r-md bg-spidey-red/50 opacity-50" />
        </div>

        {/* Content Overlay */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-5 text-center font-display transition-all duration-700 pointer-events-auto ${animatingOut ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-md rounded-[32px] border-2 border-spidey-red/30 bg-black/40 p-8 shadow-[0_0_50px_-10px_var(--spidey-red-glow)] backdrop-blur-xl">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full border-4 border-spidey-red/20 bg-spidey-red/10 text-spidey-red shadow-[0_0_30px_var(--spidey-red-glow)]">
              <SpiderMask className="size-10" />
            </div>
            
            <h1 className="mb-2 text-3xl font-bold tracking-widest text-spidey-red uppercase">HQ Locked</h1>
            <p className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">Access restricted to authorized personnel</p>
            
            <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-3 text-lg font-semibold text-foreground">Solve this riddle to enter:</p>
              <p className="text-sm leading-relaxed text-muted-foreground">What has 8 legs, spins a web, and is Maahir&apos;s favorite superhero?</p>
              {showHint && <p className="mt-3 text-xs font-bold text-spidey-blue">Hint: Think red and blue!</p>}
            </div>

            <form onSubmit={checkAnswer} className="relative">
              <input
                type="text"
                value={attempt}
                onChange={(e) => setAttempt(e.target.value)}
                placeholder="Enter password..."
                className={`w-full rounded-full border-2 bg-black/50 px-6 py-4 text-center text-lg font-bold text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-spidey-red ${error ? 'animate-shake border-red-500/80 bg-red-500/10' : 'border-white/10 hover:border-white/20'}`}
                autoFocus
              />
              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-spidey-red px-6 py-4 font-bold tracking-wide text-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                Unlock Base
                <SpiderBug className="size-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
