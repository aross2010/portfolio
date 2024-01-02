'use client'

import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useInView } from 'react-intersection-observer'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useTheme } from '@/context/theme-context'

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.25)
  const { ref: ref2, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { theme } = useTheme()
  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Experiences</SectionHeading>
      <div ref={ref2}>
        <VerticalTimeline lineColor={theme === 'light' ? '#e5e7eb' : '#4b5563'}>
          {experiencesData.map((exp, i) => {
            return (
              <React.Fragment key={i}>
                <VerticalTimelineElement
                  visible={inView}
                  contentStyle={{
                    background:
                      theme === 'light'
                        ? '#f3f4f6'
                        : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: 'none',
                    border: '1px solid rgba(0,0,0,0,0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === 'light'
                        ? '0.4rem solid #9ca3af'
                        : '0.4rem solid rgba(255, 255, 255, 0.05)',
                  }}
                  date={exp.date}
                  icon={exp.icon}
                  iconStyle={{
                    outline: 'none',
                    background:
                      theme === 'light' ? 'white' : 'rgba(100, 100, 100, 1)',
                    fontSize: '1.5rem',
                  }}
                >
                  <h3 className="font-semibold capitalize">{exp.title}</h3>
                  {exp.gpa !== null && (
                    <span className=" text-sm dark:text-white/50 font-semibold">
                      {exp.gpa} GPA
                    </span>
                  )}
                  <p className="font-normal !mt-0 text-gray-500 dark:text-white/50">
                    {exp.location}
                  </p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {exp.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            )
          })}
        </VerticalTimeline>
      </div>
    </section>
  )
}
