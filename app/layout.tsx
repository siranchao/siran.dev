import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Siran.dev | Profolio Site',
  description: 'The profolio site of Siran.dev',
}

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen px-6 sm:px-12 md:px-24 lg:px-48 xl:px-96 ${inter.className}`}>
          <Header />
          <div className={`flex-1`}>
            {children}
          </div>
          <Footer />
      </body>
    </html>
  )
}
