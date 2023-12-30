'use client'

import { useRef } from 'react'
import { projectsData } from '@/lib/data'
import { FaGithub, FaLink } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  code,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      viewport={{
        once: true,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 pb-4 max-w-[40rem] border border-black/5 rounded-lg  transition dark:text-white dark:bg-white/10">
        <div className="flex flex-col">
          <img
            src={imageUrl.src}
            alt={title}
            className="w-full max-h-[25rem] object-cover object-top rounded-t-lg"
          />
          <div className="mt-4 px-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-3xl font-semibold">{title}</h2>
              <div className="flex items-center gap-2">
                {tags.map((tag, index) => {
                  return (
                    <img
                      key={index}
                      src={tag.src}
                      className="w-[1.5rem]"
                    />
                  )
                })}
              </div>
            </div>
            <p className="mt-5 dark:text-gray-200 text-gray-800">
              {description}
            </p>
            <div
              className={`mt-4 grid ${
                link ? 'grid-cols-2 gap-2' : 'grid-cols-1'
              }`}
            >
              <Link
                className="py-2 active:scale-95 transition-all dark:bg-white dark:text-gray-950 bg-gray-950 text-gray-50 rounded-md flex justify-center items-center gap-2"
                href={code}
              >
                <FaGithub className="text-xl" /> Code
              </Link>
              {link && (
                <Link
                  className="py-2 active:scale-95 transition-all dark:bg-white dark:text-gray-950 bg-gray-950 text-gray-50 rounded-md flex justify-center items-center gap-2"
                  href={link}
                >
                  <FaLink /> Website
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
