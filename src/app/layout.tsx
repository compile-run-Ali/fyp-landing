import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wander',
  description: 'Indoor AR Navigation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      {/* <body className={inter.className + " mx-32 "}> */}
      <body className={`scroll-smooth ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
