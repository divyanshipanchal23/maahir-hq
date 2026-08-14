import { NavBar } from '@/components/nav-bar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Hobbies } from '@/components/hobbies'
import { MissionList } from '@/components/mission-list'
import { Footer } from '@/components/footer'
import { SiteEffects } from '@/components/site-effects'
import { CornerEgg } from '@/components/corner-egg'
import { SoundToggle } from '@/components/sound-toggle'
import { EntryScreen } from '@/components/entry-screen'
import { WebShot } from '@/components/web-shot'

export default function Page() {
  return (
    <EntryScreen>
      <main className="web-grid-bg relative min-h-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Hobbies />
        <MissionList />
        <Footer />

        {/* global fun stuff */}
        <SiteEffects />
        <CornerEgg />
        <SoundToggle />
        <WebShot />
      </main>
    </EntryScreen>
  )
}
