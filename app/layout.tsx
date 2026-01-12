import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Providers from './components/Providers'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export const  metadata: Metadata = {
  title: 'Siran.dev',
  description: 'The profolio site of Siran.dev',
}

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen bg-base-200 text-base-content`}>
          <Providers>
            <div className='flex flex-col min-h-screen w-full px-6 sm:px-12 md:px-24 lg:px-48 xl:w-[1250px] xl:mx-auto'>
              <Header />
              <div className={`flex-1`}>{children}</div>
              <Footer />
            </div>
          </Providers>
        </body>
    </html>
  )
}
