'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects')

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col gap-4">
        {projectsData.map((project, index) => (
          <Project
            {...project}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
