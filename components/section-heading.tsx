import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-semibold capitalize mb-6 sm:mb-16 text-center">
      {children}
    </h2>
  )
}
