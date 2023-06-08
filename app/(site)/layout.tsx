import { getEventPages } from '@/backend/sanity-utils'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Start Gjøvik',
  description: 'En student organisasjon for studenter!',
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const eventPages = await getEventPages()

  return (
    <html lang="en">
      <body className={inter.className }>{children}</body>
    </html>
  )
}
