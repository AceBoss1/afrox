// src/app/page.js (for afrox.one landing page)
import AfroXLandingPage from '@/components/AfroXLandingPage';

export const metadata = {
  title: 'AfroX - The Future of African DeFi | Stake, Mine, Swap, Earn & Govern',
  description: 'AfroX DeFi Hub - Stake tokens for 219% APY, mine LP tokens for 155% APY, swap on AfroSwap DEX, earn through ambassador program, and govern through Community of Trust.',
  keywords: 'AfroX, DeFi, Staking, LP Mining, DEX, Governance, Crypto, African DeFi, Blockchain, Community of Trust',
  authors: [{ name: 'AFRODEX Labs' }],
  openGraph: {// src/app/page.js
// AfroX Landing Page - afrox.one
'use client';

import React, { useState, useEffect, useRef } from 'react';

// Custom hook for intersection observer animations
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '💰',
      title: 'Stake & Earn',
      description: 'Stake your AfroX tokens and earn up to 219% APY with daily rewards. Bonus rates kick in after 30 days.',
      stats: '0.6% Daily',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: '⛏️',
      title: 'LP Mining',
      description: 'Lock your LP tokens for additional mining rewards. Up to 155% APY plus instant 5% bonus.',
      stats: '155% APY',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: '🔄',
      title: 'AfroSwap DEX',
      description: 'Swap tokens instantly, set limit orders, and provide liquidity to earn trading fees.',
      stats: 'Instant Swaps',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🤝',
      title: 'Ambassador Program',
      description: '5-level referral system with up to 15% commission. Build your network, earn rewards.',
      stats: '15% Commission',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🏛️',
      title: 'Governance',
      description: 'Shape the future of AfroX. Vote on proposals, create initiatives, be part of the Community of Trust.',
      stats: '5x Vote Power',
      color: 'from-rose-500 to-orange-500'
    }
  ];

  const tiers = [
    { name: 'Cadet', emoji: '🔰', stake: '1B', power: '1x' },
    { name: 'Captain', emoji: '🔱', stake: '10B', power: '2x' },
    { name: 'Commander', emoji: '⚜️', stake: '50B', power: '3x' },
    { name: 'General', emoji: '⭐', stake: '100B', power: '4x' },
    { name: 'Marshal', emoji: '〽️', stake: '500B', power: '5x' },
    { name: 'Platinum', emoji: '💠', stake: '1T', power: '5x' },
    { name: 'Diamond', emoji: '❇️', stake: '10T', power: '5x' },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-600/5 rounded-full blur-[200px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/afrodex_logoT.png" alt="AfroX" className="h-10 w-10 rounded-full ring-2 ring-orange-500/50" />
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                AfroX
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#staking" className="text-sm text-gray-400 hover:text-white transition-colors">Staking</a>
              <a href="#tiers" className="text-sm text-gray-400 hover:text-white transition-colors">Tiers</a>
              <a href="#community" className="text-sm text-gray-400 hover:text-white transition-colors">Community</a>
              <a href="https://hub.afrox.one" className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-sm font-bold text-black hover:scale-105 transition-transform">
                Launch App
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5 p-6">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-400 hover:text-white">Features</a>
              <a href="#staking" className="text-gray-400 hover:text-white">Staking</a>
              <a href="#tiers" className="text-gray-400 hover:text-white">Tiers</a>
              <a href="#community" className="text-gray-400 hover:text-white">Community</a>
              <a href="https://hub.afrox.one" className="px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-center font-bold text-black">
                Launch App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-orange-400">DeFi Hub Now Live</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in-up">
              <span className="block text-white">The Future of</span>
              <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                African DeFi
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Stake, Mine, Swap, Earn & Govern — all in one powerful ecosystem.
              <span className="text-orange-400"> Join the Community of Trust.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="https://hub.afrox.one/?ref=cfbD73A1" className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl font-bold text-black text-lg overflow-hidden hover:scale-105 transition-transform">
                <span className="relative z-10 flex items-center gap-2">
                  Start Earning Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a href="https://hub.afrox.one/guide" className="px-8 py-4 border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-white/5 transition-colors">
                Read the Guide
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-orange-400">
                  <AnimatedCounter end={219} suffix="%" />
                </div>
                <div className="text-sm text-gray-400 mt-1">Max Staking APY</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                  <AnimatedCounter end={155} suffix="%" />
                </div>
                <div className="text-sm text-gray-400 mt-1">LP Mining APY</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-purple-400">
                  <AnimatedCounter end={15} suffix="%" />
                </div>
                <div className="text-sm text-gray-400 mt-1">Referral Commission</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-blue-400">
                  <AnimatedCounter end={5} suffix=" Levels" />
                </div>
                <div className="text-sm text-gray-400 mt-1">Ambassador Tiers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Ecosystem"
            title="One Platform, Infinite Possibilities"
            subtitle="Everything you need to grow your crypto portfolio, all in one place."
          />

          {/* Feature Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 ${
                    activeFeature === index
                      ? 'bg-white/10 border-orange-500/50 scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{feature.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${feature.color} text-black`}>
                          {feature.stats}
                        </span>
                      </div>
                      <p className={`text-gray-400 mt-2 transition-all duration-300 ${
                        activeFeature === index ? 'opacity-100 max-h-20' : 'opacity-50 max-h-0 overflow-hidden'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Feature Visual */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-20 blur-[100px] transition-all duration-700`} />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8 overflow-hidden">
                <div className="text-center py-12">
                  <span className="text-8xl mb-6 block animate-bounce-slow">{features[activeFeature].icon}</span>
                  <h3 className="text-3xl font-black mb-4">{features[activeFeature].title}</h3>
                  <p className="text-gray-400 max-w-md mx-auto">{features[activeFeature].description}</p>
                  <a
                    href="https://hub.afrox.one/?ref=cfbD73A1"
                    className={`inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r ${features[activeFeature].color} rounded-full font-bold text-black hover:scale-105 transition-transform`}
                  >
                    Get Started
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staking Section */}
      <section id="staking" className="relative py-32 bg-gradient-to-b from-transparent via-orange-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Rewards"
            title="Stake & Earn Daily Rewards"
            subtitle="Simple staking with industry-leading APY. Your tokens work for you 24/7."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <RewardCard
              title="Base Rewards"
              rate="0.6%"
              period="Daily"
              description="Start earning immediately when you stake. Rewards compound automatically."
              icon="💎"
              gradient="from-orange-500 to-amber-500"
            />
            <RewardCard
              title="Loyalty Bonus"
              rate="+0.06%"
              period="After 30 Days"
              description="Keep staking for 30+ days and earn additional bonus rewards on top."
              icon="🎁"
              gradient="from-purple-500 to-pink-500"
              featured
            />
            <RewardCard
              title="Annual Returns"
              rate="219%"
              period="APY"
              description="Combined base + bonus rewards over a year. Industry-leading returns."
              icon="📈"
              gradient="from-emerald-500 to-teal-500"
            />
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">How Staking Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Connect Wallet', desc: 'Link your Web3 wallet to the platform' },
                { step: '2', title: 'Approve Tokens', desc: 'One-time approval for smart contract' },
                { step: '3', title: 'Stake AfroX', desc: 'Choose amount and stake instantly' },
                { step: '4', title: 'Earn Rewards', desc: 'Watch your rewards grow daily' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center p-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-2xl font-black text-black">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section id="tiers" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Community of Trust"
            title="Rise Through The Ranks"
            subtitle="Stake more to unlock higher tiers with greater voting power and referral levels."
          />

          <div className="mt-16 overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-7">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className="group relative w-40 lg:w-auto p-6 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform">{tier.emoji}</span>
                    <h4 className="font-bold text-lg mb-1">{tier.name}</h4>
                    <p className="text-sm text-gray-400">≥{tier.stake} AfroX</p>
                    <div className="mt-4 px-3 py-1 bg-orange-500/20 rounded-full">
                      <span className="text-sm font-bold text-orange-400">{tier.power} Vote</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <BenefitCard
              icon="🗳️"
              title="Voting Power"
              description="Higher tiers get multiplied voting power on governance proposals. Diamond Custodians have 5x influence."
            />
            <BenefitCard
              icon="📊"
              title="Proposal Creation"
              description="General tier and above can create governance proposals to shape the future of AfroX."
            />
            <BenefitCard
              icon="🌳"
              title="Referral Depth"
              description="Unlock deeper referral levels. Marshal tier unlocks all 5 levels of commission earnings."
            />
          </div>
        </div>
      </section>

      {/* Ambassador Section */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Ambassador Program"
            title="Earn By Sharing"
            subtitle="Build your network and earn up to 15% commission on your referrals' staking rewards."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            {/* Commission Structure */}
            <div className="space-y-4">
              {[
                { level: 'L1', name: 'Direct Referral', rate: '15%', color: 'from-purple-500 to-pink-500' },
                { level: 'L2', name: 'Second Level', rate: '12%', color: 'from-pink-500 to-rose-500' },
                { level: 'L3', name: 'Third Level', rate: '9%', color: 'from-rose-500 to-orange-500' },
                { level: 'L4', name: 'Fourth Level', rate: '6%', color: 'from-orange-500 to-amber-500' },
                { level: 'L5', name: 'Fifth Level', rate: '3%', color: 'from-amber-500 to-yellow-500' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center font-black text-black`}>
                    {item.level}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold">{item.name}</h4>
                  </div>
                  <div className={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.rate}
                  </div>
                </div>
              ))}
            </div>

            {/* Ambassador Info */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-[100px]" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8">
                <h3 className="text-2xl font-bold mb-6">How It Works</h3>
                <ul className="space-y-4">
                  {[
                    'Get your unique referral link from the Ambassador Dashboard',
                    'Share with friends, family, and your community',
                    'Earn commission on their first 30 days of staking rewards',
                    'Commission unlocks after 30 days if they maintain stake',
                    'Unlock deeper levels by increasing your badge tier',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-400 text-sm">✓</span>
                      </span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://hub.afrox.one/?tab=ambassador"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-black hover:scale-105 transition-transform"
                >
                  Become an Ambassador
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Join Us"
            title="Be Part of The Movement"
            subtitle="Connect with the AfroX community across multiple platforms."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <SocialCard name="Telegram" handle="@AfroDex" url="https://t.me/AfroDex" color="from-blue-400 to-blue-600" />
            <SocialCard name="Discord" handle="AfroDex" url="https://discord.gg/5EwRguT" color="from-indigo-400 to-purple-600" />
            <SocialCard name="Medium" handle="@AfroDex1" url="https://medium.com/@AfroDex1" color="from-gray-400 to-gray-600" />
            <SocialCard name="CoinMarketCap" handle="@AfroX" url="https://coinmarketcap.com/community/profile/AfroX" color="from-blue-500 to-cyan-500" />
          </div>

          {/* Contact Emails */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <ContactCard icon="📧" title="General Support" email="support@afrox.one" />
            <ContactCard icon="🏛️" title="Community of Trust" email="cot@afrox.one" />
            <ContactCard icon="🤝" title="Ambassador Program" email="ambassadors@afrox.one" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative p-12 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 rounded-3xl border border-orange-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-10" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Start Earning?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of users already earning daily rewards with AfroX. Your financial future starts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://hub.afrox.one/?ref=cfbD73A1"
                  className="px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl font-bold text-xl text-black hover:scale-105 transition-transform"
                >
                  Launch DeFi Hub
                </a>
                <a
                  href="https://hub.afrox.one/guide"
                  className="px-10 py-5 border-2 border-white/30 rounded-2xl font-bold text-xl hover:bg-white/5 transition-colors"
                >
                  Read Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/afrodex_logoT.png" alt="AfroX" className="h-12 w-12 rounded-full" />
                <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  AfroX
                </span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                The future of African DeFi. Stake, Mine, Swap, Earn & Govern — all powered by the Community of Trust.
              </p>
              <div className="flex gap-4">
                <a href="https://fb.me/AfroDex1" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">FB</a>
                <a href="https://www.linkedin.com/company/afrodexlabs" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">LI</a>
                <a href="https://t.me/AfroDex" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">TG</a>
                <a href="https://github.com/AfroDex" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">GH</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://hub.afrox.one/?ref=cfbD73A1" className="hover:text-white transition-colors">DeFi Hub</a></li>
                <li><a href="https://hub.afrox.one/guide" className="hover:text-white transition-colors">User Guide</a></li>
                <li><a href="https://hub.afrox.one/?tab=governance" className="hover:text-white transition-colors">Governance</a></li>
                <li><a href="https://coinmarketcap.com/currencies/afrodex/" className="hover:text-white transition-colors">CoinMarketCap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Platform Access</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://hub.afrox.one/?ref=cfbD73A1" className="hover:text-white transition-colors">hub.afrox.one</a></li>
                <li><a href="https://dashboard.afrox.one/?ref=cfbD73A1" className="hover:text-white transition-colors">dashboard.afrox.one</a></li>
                <li><a href="https://app.afrox.one/?ref=cfbD73A1" className="hover:text-white transition-colors">app.afrox.one</a></li>
                <li><a href="https://defi.afrox.one/?ref=cfbD73A1" className="hover:text-white transition-colors">defi.afrox.one</a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white/5 rounded-xl border border-white/10 mb-8">
            <p className="text-sm text-gray-400">
              ⚠️ <strong>Disclaimer:</strong> By using this platform you confirm you are of legal age, live in a jurisdiction where the specific crypto related activity you want to perform is permitted, and accept all liability and risk. This is not financial advice.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2019-Present AFRODEX. All rights reserved.</p>
            <p>❤️ Donations: 0xC54f68D1eD99e0B51C162F9a058C2a0A88D2ce2A</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function SectionHeader({ badge, title, subtitle }) {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
        <span className="text-sm text-gray-400">{badge}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black mb-4">{title}</h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

function RewardCard({ title, rate, period, description, icon, gradient, featured }) {
  return (
    <div className={`relative p-8 rounded-3xl border transition-all duration-300 hover:scale-105 ${
      featured 
        ? 'bg-gradient-to-b from-white/20 to-white/5 border-orange-500/50 scale-105' 
        : 'bg-white/5 border-white/10 hover:border-white/20'
    }`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-xs font-bold text-black">
          MOST POPULAR
        </div>
      )}
      <span className="text-5xl block mb-4">{icon}</span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className={`text-5xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
        {rate}
      </div>
      <p className="text-sm text-gray-400 mb-4">{period}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-colors">
      <span className="text-4xl block mb-4">{icon}</span>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function SocialCard({ name, handle, url, color }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <span className="text-xl font-bold text-white">{name.charAt(0)}</span>
      </div>
      <h4 className="font-bold">{name}</h4>
      <p className="text-sm text-gray-400">{handle}</p>
    </a>
  );
}

function ContactCard({ icon, title, email }) {
  return (
    <a
      href={`mailto:${email}`}
      className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-colors"
    >
      <span className="text-3xl">{icon}</span>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-orange-400">{email}</p>
      </div>
    </a>
  );
}
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
