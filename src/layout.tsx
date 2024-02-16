import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components/Header'
import ThemesProvider from '@/providers/ThemesProvider'
import '@/styles/globals.scss'
import '@/styles/theme-config.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemesProvider>
      <Header />
        {children}
      <Toaster />
    </ThemesProvider>
  )
}
