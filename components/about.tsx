'use client'

import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
export default function About() {
  const { ref } = useSectionInView('About')
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" // scroll adds margin to top when clicked from nav
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After studying to become a Physical Therapist for four years, I decided
        to pursue my passion for programming, specifically{' '}
        <span className="font-bold">Web Development</span>. I have completed all
        lower division Computer Science coursework and am expected to transfer
        to San Jose State University to graduate in December 2025. I am based in{' '}
        San Jose, CA, looking for internships to kickstart my career! My current
        development stack includes <span className="font-bold">React</span>,{' '}
        <span className="font-bold">TypeScript</span>,{' '}
        <span className="font-bold">Next.js</span>,{' '}
        <span className="font-bold">ExpressJS</span>,{' '}
        <span className="font-bold">MongoDB</span>, and{' '}
        <span className="font-bold">TailwindCSS</span>. However, I am always
        open to opportunites that allow me learn new technologies and evolve as
        a developer!
      </p>
      <p>
        Outside of programming, I love watching movies, playing video games,
        listening to hip-hop, playing basketball, and hanging out with my
        friends and family. Hope to hear from you soon!
      </p>
    </motion.section>
  )
}
