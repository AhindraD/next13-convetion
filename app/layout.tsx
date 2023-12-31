import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import { Suspense } from 'react'
import Loading from './Loading'
import AuthProvider from './auth/Provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="retro">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex flex-col gap-4">
            <NavBar />
            {
              //suspense feature
              //fallbach to loader at first, gets data then streames the children
            }
            <Suspense fallback={<Loading />}>
              <main className='px-12'>{children}</main>
            </Suspense>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
