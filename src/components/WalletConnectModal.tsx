import { X, Wallet } from 'lucide-react';

interface WalletConnectModalProps {
  onClose: () => void;
  onConnect: (walletType: string) => void;
}

export function WalletConnectModal({ onClose, onConnect }: WalletConnectModalProps) {
  const wallets = [
    { name: 'Phantom', isPrimary: true },
    { name: 'Solflare', isPrimary: false },
    { name: 'Backpack', isPrimary: false }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-white/10 p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 mb-4">
              <Wallet className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="mb-2">Connect Your Wallet</h2>
            <p className="text-white/60">
              Choose your preferred Solana wallet
            </p>
          </div>

          {/* Wallet Options */}
          <div className="space-y-3 mb-6">
            {wallets.map((wallet) => (
              <button
                key={wallet.name}
                onClick={() => onConnect(wallet.name)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                  wallet.isPrimary
                    ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/50 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="flex-1 text-left text-white">
                  {wallet.name}
                </span>
                {wallet.isPrimary && (
                  <span className="px-2 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    Recommended
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Footer Text */}
          <p className="text-center text-white/40">
            Used only for signing license transactions.
          </p>
        </div>
      </div>
    </div>
  );
}
