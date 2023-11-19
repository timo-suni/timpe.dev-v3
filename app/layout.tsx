import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import './globals.css'

export const metadata: Metadata = {
  title: 'TIMPE.Dev',
  description: 'Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/nth0jjf.css'/>
      </head>
      <body className='mx-auto px-2 text-neutral-50 h-screen max-w-screen-xl pt-6 bg-[#1A1A1A]'>

        <div className='fixed z-10 top-4 left-0 w-full'>
          <Nav />
        </div>
        <div className='mt-[100px]'>
          {children}
        </div>
        

      </body>
     
    </html>
  )
}
