import type { SVGProps } from 'react'

/* A friendly generic spider-hero mask motif (original, no IP) */
export function SpiderMask(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24 4C13 4 6 11 6 21c0 9 8 17 18 23 10-6 18-14 18-23C42 11 35 4 24 4Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M24 4C13 4 6 11 6 21c0 9 8 17 18 23 10-6 18-14 18-23C42 11 35 4 24 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M24 6v34M8 20h32M11 12l26 16M37 12L11 28" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path
        d="M17 22c1.5-3 4-4 7-4s5.5 1 7 4c-2 2-4.5 3-7 3s-5-1-7-3Z"
        fill="currentColor"
      />
      <path
        d="M27 22c1.5-3 4-4 7-4s5.5 1 7 4c-2 2-4.5 3-7 3s-5-1-7-3Z"
        fill="currentColor"
        opacity="0"
      />
    </svg>
  )
}

/* Small spider (used for cursor drop + corner easter egg) */
export function Spider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="16" cy="19" rx="5" ry="6" fill="currentColor" />
      <circle cx="16" cy="12" r="3.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M11 15c-3-1-5-3-6-6M11 19c-3 0-6-1-8-3M11 22c-3 1-5 3-6 6" />
        <path d="M21 15c3-1 5-3 6-6M21 19c3 0 6-1 8-3M21 22c3 1 5 3 6 6" />
      </g>
      <circle cx="14.6" cy="11.5" r="0.9" fill="var(--background)" />
      <circle cx="17.4" cy="11.5" r="0.9" fill="var(--background)" />
    </svg>
  )
}

/* Web / target reticle for mission checkboxes */
export function WebReticle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path
        d="M16 3v26M3 16h26M6.5 6.5l19 19M25.5 6.5l-19 19"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
    </svg>
  )
}

/* Cursor web icon */
export function CursorWeb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="13" cy="13" r="11" stroke="#E23636" strokeWidth="1.4" />
      <circle cx="13" cy="13" r="7" stroke="#E23636" strokeWidth="1.2" opacity="0.8" />
      <circle cx="13" cy="13" r="3" stroke="#E23636" strokeWidth="1.2" opacity="0.6" />
      <path d="M13 2v22M2 13h22M5 5l16 16M21 5L5 21" stroke="#E23636" strokeWidth="0.9" opacity="0.7" />
      <circle cx="13" cy="13" r="1.6" fill="#E23636" />
    </svg>
  )
}

/* Corner web decoration (HUD lines) */
export function WebCorner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1">
        <path d="M0 0 L200 60 M0 0 L120 200 M0 0 L200 140 M0 0 L60 200 M0 0 L200 20 M0 0 L20 200" opacity="0.5" />
        <path d="M0 0 Q40 40 30 90 Q80 100 90 60 Q120 130 70 150 Q40 110 20 160" opacity="0.6" fill="none" />
      </g>
    </svg>
  )
}

export function HeartDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 27C4 19 2 11 6 6c3-3.5 8-2.5 10 2 2-4.5 7-5.5 10-2 4 5 2 13-10 21Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PawDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="16" cy="22" rx="7" ry="6" fill="currentColor" />
      <ellipse cx="7" cy="15" rx="3" ry="4" fill="currentColor" />
      <ellipse cx="25" cy="15" rx="3" ry="4" fill="currentColor" />
      <ellipse cx="12" cy="9" rx="2.6" ry="3.5" fill="currentColor" />
      <ellipse cx="20" cy="9" rx="2.6" ry="3.5" fill="currentColor" />
    </svg>
  )
}

/* Chunky filled cartoon spider — used scattered around + as bullet points */
export function SpiderBug(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M15 18C10 16 8 12 6 8M15 22C10 22 6 21 3 18M15 26C11 28 8 31 6 35" />
        <path d="M25 18C30 16 32 12 34 8M25 22C30 22 34 21 37 18M25 26C29 28 32 31 34 35" />
      </g>
      <ellipse cx="20" cy="24" rx="8" ry="9" fill="currentColor" />
      <circle cx="20" cy="14" r="5.5" fill="currentColor" />
      <circle cx="17.6" cy="13" r="1.5" fill="var(--background)" />
      <circle cx="22.4" cy="13" r="1.5" fill="var(--background)" />
      <circle cx="17.6" cy="13" r="0.6" fill="currentColor" />
      <circle cx="22.4" cy="13" r="0.6" fill="currentColor" />
    </svg>
  )
}

/* Big friendly corner web (spun from a corner) for the footer */
export function BigWeb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeLinecap="round" fill="none">
        {/* radial spokes from center */}
        <g strokeWidth="2" opacity="0.85">
          <path d="M100 100 L100 8M100 100 L164 36M100 100 L192 100M100 100 L164 164M100 100 L100 192M100 100 L36 164M100 100 L8 100M100 100 L36 36" />
        </g>
        {/* concentric web rings (sagging strands) */}
        <g strokeWidth="2" opacity="0.7">
          <path d="M100 34 Q140 55 166 100 Q140 145 100 166 Q60 145 34 100 Q60 55 100 34Z" />
          <path d="M100 60 Q128 72 140 100 Q128 128 100 140 Q72 128 60 100 Q72 72 100 60Z" />
          <path d="M100 82 Q116 90 118 100 Q116 110 100 118 Q84 110 82 100 Q84 90 100 82Z" />
        </g>
      </g>
    </svg>
  )
}

/* Little swoosh / motion lines for near buttons */
export function Swoosh(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M4 6h20" />
        <path d="M2 12h30" />
        <path d="M8 18h16" />
      </g>
    </svg>
  )
}

/* Spinning web disc for the "In Progress" badge */
export function WebSpin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
        <circle cx="12" cy="12" r="9" opacity="0.55" />
        <circle cx="12" cy="12" r="5" opacity="0.4" />
      </g>
    </svg>
  )
}
