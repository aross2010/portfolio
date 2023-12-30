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
        I &apos;m a Software Engineer student at San Jose State University, with
        a passion for creating functional web applications. Most of my
        application building experience lies within the JavaScript ecosystem,
        creating projects with React.js, Next.js, TypeScript, Node.js, and more.
        However, I have mastered the fundamemtals of programming with Java and
        C, and I am always looking for opportunites to evolve as a developer and
        learn new technologies.
      </p>
      <p>
        I aim to combine my interest for sports, movies, music, and fitness with
        my programming knowledge to create applications that bring people of
        these worlds together.
      </p>
    </motion.section>
  )
}
