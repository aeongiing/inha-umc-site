import type { Metadata } from 'next';
import { DM_Mono } from 'next/font/google';
import './globals.css';
import GlobalEffects from '@/components/GlobalEffects';

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'INHA UMC — 10기',
  description: '인하대학교 UMC(University MakeUs Challenge) 앱 개발 동아리 공식 홈페이지',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={dmMono.variable}>
      <body>
        <GlobalEffects />
        <div id="scroll-bar" />
        <div id="cur-dot" />
        <div id="cur-ring" />
        <div className="circuit-bg" />
        {children}
      </body>
    </html>
  );
}
