import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'; // imported in chapter 3

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} antialiased'}>{children}</body>
    </html>
  );
}
