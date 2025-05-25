import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'SDU Prom 2025 - Выпускной',
  description: 'Официальный сайт выпускного SDU 2025. Регистрация и оплата билетов на незабываемый вечер.',
  keywords: 'SDU, выпускной, 2025, Almaty, Kazakhstan, prom, graduation',
  authors: [{ name: 'SDU Prom Committee' }],
  openGraph: {
    title: 'SDU Prom 2025 - Выпускной',
    description: 'Официальный сайт выпускного SDU 2025. Забронируйте место на легендарном вечере!',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'SDU Prom 2025',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDU Prom 2025',
    description: 'Официальный сайт выпускного SDU 2025',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#5b21b6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}