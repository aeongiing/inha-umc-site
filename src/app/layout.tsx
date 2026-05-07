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
  title: 'INHA UMC — 인하대학교 앱 개발 동아리',
  description: '인하대학교 UMC(University MakeUs Challenge) 앱 개발 동아리 공식 홈페이지. iOS, Android, Web 개발을 함께합니다.',
  keywords: ['인하대학교', 'UMC', '앱개발', '동아리', '인하대 동아리', 'University MakeUs Challenge'],
  openGraph: {
    title: 'INHA UMC — 인하대학교 앱 개발 동아리',
    description: '인하대학교 UMC(University MakeUs Challenge) 앱 개발 동아리 공식 홈페이지',
    url: 'https://inha-umc.vercel.app',
    siteName: 'INHA UMC',
    locale: 'ko_KR',
    type: 'website',
  },
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
