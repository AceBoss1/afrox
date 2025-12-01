// src/app/page.js (for afrox.one landing page)
import AfroXLandingPage from '@/components/AfroXLandingPage';

export const metadata = {
  title: 'AfroX - The Future of African DeFi | Stake, Mine, Swap, Earn & Govern',
  description: 'AfroX DeFi Hub - Stake tokens for 219% APY, mine LP tokens for 155% APY, swap on AfroSwap DEX, earn through ambassador program, and govern through Community of Trust.',
  keywords: 'AfroX, DeFi, Staking, LP Mining, DEX, Governance, Crypto, African DeFi, Blockchain, Community of Trust',
  authors: [{ name: 'AFRODEX Labs' }],
  openGraph: {
    title: 'AfroX - The Future of African DeFi',
    description: 'Stake, Mine, Swap, Earn & Govern — all in one powerful ecosystem.',
    url: 'https://afrox.one',
    siteName: 'AfroX',
    images: [
      {
        url: '/afrodex_logoA.png',
        width: 512,
        height: 512,
        alt: 'AfroX Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfroX - The Future of African DeFi',
    description: 'Stake, Mine, Swap, Earn & Govern — all in one powerful ecosystem.',
    images: ['/afrodex_logoA.png'],
  },
};

export default function Home() {
  return <AfroXLandingPage />;
}
