import React, { createElement } from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from 'react-icons/si'
import { LuBookOpenCheck } from 'react-icons/lu'
import cinefindImg from '@/public/cinefind-home-page.png'
import cImg from '@/public/c-project.png'
import portfolioImg from '@/public/portfolio.png'
import spotify from '@/public/spotify.png'
import spotlefyImg from '@/public/spotlefy.png'
import html from '@/public/html.png'
import css from '@/public/css.png'
import typescript from '@/public/typescript.png'
import react from '@/public/react.png'
import next from '@/public/next.png'
import tailwind from '@/public/tailwind.png'
import node from '@/public/node.png'
import express from '@/public/express.png'
import mongodb from '@/public/mongo.png'
import javascript from '@/public/javascript.png'
import c from '@/public/c.png'
import java from '@/public/java.png'
import python from '@/public/python.png'
import git from '@/public/git.png'
import maria from '@/public/maria.png'
import mysql from '@/public/mysql.png'
import bootstrap from '@/public/bootstrap.png'
import vscode from '@/public/vscode.png'
import eclipse from '@/public/eclipse.png'
import postman from '@/public/postman.png'
import sql from '@/public/sql.png'
import movement from '@/public/movement.png'
import prisma from '@/public/prisma.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'B.S. Kinesiology',
    location: 'San Francisco State University, San Francsisco, CA',
    gpa: '3.9',
    description:
      'After transfering with an A.A. in Kinesiology, I continued my studies at SFSU, where I ultimately made the decision to pursue a career in programming.',
    icon: React.createElement(LuBookOpenCheck),
    date: 'Janurary 2021 - June 2022',
  },
  {
    title: 'Physical Therapy Aide',
    location: 'South City Physical Therapy, San Francisco, CA',
    gpa: null,
    description:
      'I collaborated with the lead Physical Therapist in creating rehabilition plans for clients and provided individualized care to patients.',
    icon: React.createElement(CgWorkAlt),
    date: 'Janurary 2022 - May 2022',
  },
  {
    title: 'Theatre Manager, Human Resources',
    location: 'AMC Theatres, San Jose, CA',
    gpa: null,
    description:
      'I ascended the ranks of the theatre to become a Manager after three years. I was responsible for recruiting, scheduling staff, managing payroll, and managing 40+ employees to foster a positive workplace culture.',
    icon: React.createElement(CgWorkAlt),
    date: 'March 2022 - September 2022',
  },
  {
    title: 'Computer Science',
    location: 'West Valley College, Saratoga, CA',
    gpa: '4.0',
    description:
      'Completed all lower division courses for transfer to San Jose State University at West Valley College. Coursework included: OOP, Data Structures, and Algrorithms using Java, C programming, and ARM Assembly Language programming.',
    icon: React.createElement(LuBookOpenCheck),
    date: 'September 2022 - June 2023',
  },
  {
    title: 'B.S. Software Engineering',
    location: 'San Jose State University, San Jose, CA',
    gpa: null,
    description:
      'I am currently pursuing a B.S. in Software Engineering at SJSU, on pace to graduate some time in 2025.',
    icon: React.createElement(LuBookOpenCheck),
    date: 'January 2024 - 2025',
  },
] as const

export const projectsData = [
  {
    title: 'Spotlefy',
    description:
      "A full-stack web application that utilizes the Spotify API to allow users to create their own Heardle game using an artist's catalog or a Spotify playlist.",
    tags: [typescript, next, react, tailwind, spotify],
    imageUrl: spotlefyImg,
    code: 'https://github.com/aross2010/spotlefy',
    link: 'https://spotlefy-heardle.vercel.app/',
  },
  {
    title: 'Movement',
    description:
      'A full-stack web application that allows users to log their workouts and track their progress in the gym through visualized charts and graphs from Chart.js.',
    tags: [typescript, next, react, tailwind, mongodb, prisma],
    imageUrl: movement,
    code: 'https://github.com/aross2010/movement-next',
    link: 'https://movement-next.vercel.app',
  },
  {
    title: 'CineFind',
    description:
      'A full-stack web application that allows users to find films to watch through a variety of filters, save films with lists, review and discuss films with other users, and play the CineQ movie guessing game to test their movie IQ.',
    tags: [javascript, react, node, express, mongodb],
    imageUrl: cinefindImg,
    code: 'https://github.com/aross2010/CineFind',
    link: 'https://cinefind.vercel.app/',
  },
  // {
  //   title: 'My Portfolio',
  //   description:
  //     'Applied new Next.js features (App Router & Server Actions) in addition to popular libraries such as Framer Motion, React Email, Resend, and more to create a user-friendly experience.',
  //   tags: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
  //   imageUrl: portfolioImg,
  //   code: 'https://github.com/aross2010/portfolio',
  //   link: 'https://alex-ross-dev.vercel.app/',
  // },
  {
    title: 'Temperature Analysis',
    description:
      'I wrote a C program to collect and validate data from a temperature sensor, store the data using MariaDB, and analyze the data via SQL queries.',
    tags: [c, maria, sql],
    imageUrl: cImg,
    code: 'https://github.com/aross2010/Temperature-Analysis',
    link: null,
  },
] as const

export const skillsData = [
  {
    name: 'HTML',
    logo: html,
  },
  {
    name: 'CSS',
    logo: css,
  },
  {
    name: 'JavaScript',
    logo: javascript,
  },
  {
    name: 'TypeScript',
    logo: typescript,
  },
  {
    name: 'Java',
    logo: java,
  },
  {
    name: 'Python',
    logo: python,
  },
  {
    name: 'C',
    logo: c,
  },
  {
    name: 'SQL',
    logo: sql,
  },
  {
    name: 'Node.js',
    logo: node,
  },
  {
    name: 'Express',
    logo: express,
  },
  {
    name: 'React',
    logo: react,
  },
  {
    name: 'Next.js',
    logo: next,
  },
  {
    name: 'TailwindCSS',
    logo: tailwind,
  },
  {
    name: 'Bootstrap',
    logo: bootstrap,
  },
  {
    name: 'Prisma',
    logo: prisma,
  },
  {
    name: 'MongoDB',
    logo: mongodb,
  },
  {
    name: 'MySQL',
    logo: mysql,
  },
  {
    name: 'MariaDB',
    logo: maria,
  },
  {
    name: 'Postman',
    logo: postman,
  },

  {
    name: 'Git',
    logo: git,
  },
  {
    name: 'VS Code',
    logo: vscode,
  },
  {
    name: 'Eclipse',
    logo: eclipse,
  },
] as const

export const stack = [
  React.createElement(SiHtml5),
  React.createElement(SiCss3),
  React.createElement(SiTypescript),
  React.createElement(SiReact),
  React.createElement(SiNextdotjs),
  React.createElement(SiTailwindcss),
] as const
