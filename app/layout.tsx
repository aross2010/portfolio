import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Ross | Portfolio',
  description:
    'Alex Ross is a full-stack developer with a front-end, React focus.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth" // smooth scrolling
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 darl:text-opacity-90 dark:bg-opacity-90 overflow-x-hidden`}
      >
        <div className="bg-[#8b17e450] absolute top-[-6rem] left-1/2 transform -translate-x-1/2 -z-10 h-[31.25rem] w-full  blur-[10rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
