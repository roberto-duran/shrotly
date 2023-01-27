import './globals.css'
import { Poppins } from '@next/font/google'


const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={poppins.className}>
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
