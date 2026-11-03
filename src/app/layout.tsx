import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yogi Istianto — @bankerdapatcuan | Digital Creator',
  description: 'Kreator konten edukasi produk digital untuk karyawan bank. Bangun aset digital dan penghasilan sampingan tanpa mengganggu jam kerja.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`dark ${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased bg-[#0A0A0F] text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  )
}

