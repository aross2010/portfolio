'use client'

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast, { Toaster } from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')
  const [data, setData] = useState({
    email: '',
    message: '',
  })

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center" // pick the smaller of 100% or 38 rem
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me!</SectionHeading>
      <p className="text-gray-700 -mt-0 sm:-mt-6 dark:text-white/80">
        Contact me through this form or directly at{' '}
        <a
          className="underline"
          href="mailto:adross1027@gmail.com"
        >
          adross1027@gmail.com
        </a>
        !
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black/80"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)
          if (error) {
            toast.error(error)
          }
          setData({ email: '', message: '' })
          toast.success('Sent! Thanks for reaching out!')
        }}
      >
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack focus:outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your e-mail"
          name="senderEmail"
          maxLength={100}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack focus:outline-black p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderMessage"
          placeholder="Your message"
          maxLength={5000}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          required
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
