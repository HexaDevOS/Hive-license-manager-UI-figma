import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';
import bgImage from 'figma:asset/35d9e9f9d8f4ddf9ef08850d2bbdce65ccd8dbeb.png';

interface HeroProps {
  onConnectWallet: () => void;
}

export function Hero({ onConnectWallet }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400">Powered by Solana</span>
        </div>

        <h1 className="mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
          Hive-Net Ecosystem
        </h1>
        
        <p className="mb-12 text-white/70 max-w-2xl mx-auto">
          HiveNet unlocks fast, secure access to HiveOS and Web3 services—powered by decentralized infrastructure.
        </p>

        <button
          onClick={onConnectWallet}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105"
        >
          <span className="relative z-10">Connect Wallet (Phantom)</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
        </button>

        <p className="mt-4 text-white/40">
          Secure, non-custodial licensing on Solana.
        </p>
      </div>
    </div>
  );
}