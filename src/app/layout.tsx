
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainContainer from '@/components/LayoutContainers/MainContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Impulse Commerce',
  description: 'Commerce Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContainer children={children}/>
      </body>
    </html>
  )
}
