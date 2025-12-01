// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'AfroX - The Future of African DeFi | Stake, Mine, Swap, Earn & Govern',
  description: 'AfroX DeFi Hub - Stake tokens for 219% APY, mine LP tokens for 155% APY, swap on AfroSwap DEX, earn through ambassador program, and govern through Community of Trust.',
  keywords: 'AfroX, DeFi, Staking, LP Mining, DEX, Governance, Crypto, African DeFi, Blockchain, Community of Trust',
  authors: [{ name: 'AFRODEX Labs' }],
  icons: {
    icon: '/afrodex_token.png',
  },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
