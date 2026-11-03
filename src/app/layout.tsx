import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yogi Istianto — @bankerdapatcuan',
  description: 'Kreator konten edukasi produk digital untuk karyawan bank. Bangun aset digital dan penghasilan sampingan tanpa mengganggu jam kerja.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
