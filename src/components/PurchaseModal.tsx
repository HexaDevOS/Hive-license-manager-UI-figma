import { X, CheckCircle, Wallet, Zap } from 'lucide-react';
import { Product } from '../App';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PurchaseModalProps {
  product: Product;
  walletAddress: string;
  onClose: () => void;
}

export function PurchaseModal({ product, walletAddress, onClose }: PurchaseModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleConfirm = () => {
    setIsProcessing(true);
    // Simulate transaction
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-white/10 p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-[80px]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        <div className="relative z-10">
          {isComplete ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border border-green-500/50 mb-4">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="mb-2">Transaction Complete!</h2>
              <p className="text-white/60">
                Your license has been activated
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 mb-4 overflow-hidden">
                  {product.iconType === 'image' ? (
                    <ImageWithFallback 
                      src={product.icon}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">{product.icon}</span>
                  )}
                </div>
                <h2 className="mb-2">Purchase License</h2>
                <p className="text-white/60">
                  Complete your {product.name} purchase
                </p>
              </div>

              {/* Product Details */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <span className="text-white/60">Product</span>
                  <span className="text-white">{product.name}</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <span className="text-white/60">Price</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Your Wallet</span>
                  <div className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-cyan-400" />
                    <span className="text-white">{walletAddress}</span>
                  </div>
                </div>
              </div>

              {/* Transaction Details */}
              <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20 mb-6">
                <h3 className="mb-3 text-purple-400">Transaction Details</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Network</span>
                    <span className="text-white">Solana Mainnet</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Estimated Gas</span>
                    <span className="text-white">~0.00001 SOL</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">License Type</span>
                    <span className="text-white">NFT Certificate</span>
                  </div>
                </div>
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing Transaction...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span>Confirm Transaction</span>
                  </>
                )}
              </button>

              {/* Security Note */}
              <p className="text-center text-white/40 mt-4">
                Your wallet will prompt you to sign this transaction
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}