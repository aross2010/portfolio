'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import react from '@/public/react.png'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // stagger the animations by 0.05s
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, i) => {
          return (
            <motion.li
              key={i}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={i}
              className="bg-white borderBlack rounded-xl px-4 py-2 shadow-md dark:bg-white/10 dark:text-white/80 flex items-center gap-2"
            >
              <Image
                src={skill.logo}
                alt={`${skill.name} logo`}
                width={20}
                height={20}
              />
              {skill.name}
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
