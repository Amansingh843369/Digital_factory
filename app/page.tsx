import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import { LatestNews } from '@/components/latest-news'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
         <About />
        <Services />
       
        {/* <Projects /> */}
        {/* <Stats /> */}
        {/* <Testimonials /> */}
        <LatestNews />
      </main>
      <SiteFooter />
    </>
  )
}
