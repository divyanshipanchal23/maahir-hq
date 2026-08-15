'use client'

/* Tiny synthesized kid-friendly sound effects via Web Audio API.
   No audio files, no external assets. All under ~0.6s. */

let ctx: AudioContext | null = null
let muted = false
let volume = 0.45 // low-ish default

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || (window as any).webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  // some browsers start suspended until a user gesture
  if (ctx.state === 'suspended') ctx.resume().catch(() => { })
  return ctx
}

export function setMuted(m: boolean) {
  muted = m
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('maahir:muted', m ? '1' : '0')
    } catch { }
  }
}

export function getMuted(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const v = localStorage.getItem('maahir:muted')
    if (v != null) muted = v === '1'
  } catch { }
  return muted
}

/* playful spring "boing" — pitch swoops up then settles */
export function playBoing() {
  const ac = getCtx()
  if (!ac || muted) return
  const now = ac.currentTime
  const osc = ac.createOscillator()
  const gain = ac.createGain()
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(180, now)
  osc.frequency.exponentialRampToValueAtTime(560, now + 0.12)
  osc.frequency.exponentialRampToValueAtTime(320, now + 0.28)
  osc.frequency.exponentialRampToValueAtTime(420, now + 0.42)
  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.02)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5)
  osc.connect(gain).connect(ac.destination)
  osc.start(now)
  osc.stop(now + 0.55)
}

/* "whisper" sound recipe from cuelume */
export function playThwip() {
  const ac = getCtx()
  if (!ac || muted) return
  const now = ac.currentTime

  const scale = volume * 15

  // Layer 1: Noise (lowpass)
  const noiseDur = 0.025 + 0.13
  const buffer = ac.createBuffer(1, ac.sampleRate * noiseDur, ac.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1
  }
  const noiseSrc = ac.createBufferSource()
  noiseSrc.buffer = buffer

  const noiseFilter = ac.createBiquadFilter()
  noiseFilter.type = 'lowpass'
  noiseFilter.frequency.setValueAtTime(1600, now)
  noiseFilter.Q.value = 0.7

  const noiseGain = ac.createGain()
  noiseGain.gain.setValueAtTime(0.0001, now)
  noiseGain.gain.exponentialRampToValueAtTime(0.04 * scale, now + 0.025)
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025 + 0.13)

  noiseSrc.connect(noiseFilter).connect(noiseGain).connect(ac.destination)
  noiseSrc.start(now)
  noiseSrc.stop(now + noiseDur)

  // Layer 2: Tone (sine with glide)
  const toneOffset = 0.01
  const toneDur = 0.012 + 0.14
  const osc = ac.createOscillator()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(880, now + toneOffset)
  osc.frequency.exponentialRampToValueAtTime(660, now + toneOffset + 0.14)

  const oscGain = ac.createGain()
  oscGain.gain.setValueAtTime(0.0001, now + toneOffset)
  oscGain.gain.exponentialRampToValueAtTime(0.025 * scale, now + toneOffset + 0.012)
  oscGain.gain.exponentialRampToValueAtTime(0.0001, now + toneOffset + 0.012 + 0.14)

  osc.connect(oscGain).connect(ac.destination)
  osc.start(now + toneOffset)
  osc.stop(now + toneOffset + toneDur)
}

/* Play custom web-shoot audio file */
export function playWebShootSound() {
  if (typeof window === 'undefined') return
  if (getMuted()) return
  try {
    const audio = new Audio('/sounds/web-shoot.mp3')
    audio.volume = 0.15
    audio.play().catch(() => { })
  } catch { }
}

/* "arrival" rising harmonic portal recipe from cuelume */
export function playArrival() {
  const ac = getCtx()
  if (!ac || muted) return
  const now = ac.currentTime

  const dur = 0.55
  const scale = volume * 1.5

  // Fundamental tone rising from 220Hz (A3) to 660Hz (E5)
  const osc1 = ac.createOscillator()
  const gain1 = ac.createGain()
  osc1.type = 'sine'
  osc1.frequency.setValueAtTime(220, now)
  osc1.frequency.exponentialRampToValueAtTime(660, now + dur * 0.7)

  gain1.gain.setValueAtTime(0.0001, now)
  gain1.gain.exponentialRampToValueAtTime(0.08 * scale, now + 0.1)
  gain1.gain.exponentialRampToValueAtTime(0.0001, now + dur)

  osc1.connect(gain1).connect(ac.destination)
  osc1.start(now)
  osc1.stop(now + dur)

  // Fifth harmonic tone rising in tandem (330Hz to 990Hz) with soft delay
  const osc2 = ac.createOscillator()
  const gain2 = ac.createGain()
  osc2.type = 'triangle'
  osc2.frequency.setValueAtTime(330, now + 0.04)
  osc2.frequency.exponentialRampToValueAtTime(990, now + 0.04 + dur * 0.65)

  gain2.gain.setValueAtTime(0.0001, now + 0.04)
  gain2.gain.exponentialRampToValueAtTime(0.04 * scale, now + 0.12)
  gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.04 + dur * 0.9)

  osc2.connect(gain2).connect(ac.destination)
  osc2.start(now + 0.04)
  osc2.stop(now + 0.04 + dur * 0.9)

  // Shimmering filtered noise sweep for portal arrival effect
  const buffer = ac.createBuffer(1, ac.sampleRate * dur, ac.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1
  }
  const noise = ac.createBufferSource()
  noise.buffer = buffer

  const filter = ac.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.setValueAtTime(800, now)
  filter.frequency.exponentialRampToValueAtTime(3200, now + dur * 0.8)
  filter.Q.value = 3.0

  const noiseGain = ac.createGain()
  noiseGain.gain.setValueAtTime(0.0001, now)
  noiseGain.gain.exponentialRampToValueAtTime(0.02 * scale, now + 0.15)
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + dur)

  noise.connect(filter).connect(noiseGain).connect(ac.destination)
  noise.start(now)
  noise.stop(now + dur)
}
