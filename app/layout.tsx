import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CocuriaProviders } from '@/components/cocuria-providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cocuria.com'),
  title: 'Cocuria | Structured learning for every age',
  description: 'Discover thoughtful co-curricular and skill programmes for students, families and adults.',
  openGraph: { title: 'Cocuria | Structured learning for every age', description: 'Discover thoughtful co-curricular and skill programmes for students, families and adults.', images: ['/file_000000009eec81fabb6fae0c14453e62.png'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={inter.className}><CocuriaProviders>{children}</CocuriaProviders></body></html>;
}
