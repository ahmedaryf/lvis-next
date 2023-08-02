import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LVIS Hotels',
  description: 'A beautiful hotel in Dharavandhoo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <Navbar />
        {children}
      </Providers>
      </body>
    </html>
  )
}
