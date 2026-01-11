import { useState } from 'react';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { WalletConnectModal } from './components/WalletConnectModal';
import { PurchaseModal } from './components/PurchaseModal';
import { Footer } from './components/Footer';

export interface Product {
  id: number;
  name: string;
  price?: string;
  description: string;
  icon: string;
  iconType?: 'emoji' | 'image';
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'HiveOS',
      price: '$800',
      description: 'Enterprise decentralized operating system.',
      icon: '🖥️'
    },
    {
      id: 2,
      name: 'Hive Routing',
      price: 'Free or $99',
      description: 'Encrypted peer-to-peer routing product. Limited access or One-Time Fee: $99 lifetime access.',
      icon: '🔀'
    },
    {
      id: 3,
      name: 'Hive Cloud',
      price: 'From $5/mo',
      description: 'Decentralized cloud storage with three tiers: Solo (100 GB), Plus (1 TB), and Power (2 TB).',
      icon: '☁️'
    },
    {
      id: 4,
      name: 'Hive Chat',
      price: '$9/mo',
      description: 'Private, on-chain communication.',
      icon: '💬'
    },
    {
      id: 5,
      name: 'Hive Sim',
      price: 'Coming Soon',
      description: 'Hive Sim is a data eSIM powered by the Hive Routing Protocol on Solana.',
      icon: 'https://images.unsplash.com/photo-1741721816781-bab93346b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW0lMjBjYXJkJTIwZXNpbXxlbnwxfHx8fDE3NjQxMTIwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      iconType: 'image'
    }
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    if (connectedWallet) {
      setShowPurchaseModal(true);
    } else {
      setShowWalletModal(true);
    }
  };

  const handleWalletConnect = (walletType: string) => {
    // Mock wallet connection
    const mockAddress = '7xKX...9pQm';
    setConnectedWallet(mockAddress);
    setShowWalletModal(false);
    setShowPurchaseModal(true);
  };

  const handleClosePurchase = () => {
    setShowPurchaseModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero onConnectWallet={() => setShowWalletModal(true)} />
      <ProductGrid products={products} onProductClick={handleProductClick} />
      <Footer />
      
      {showWalletModal && (
        <WalletConnectModal 
          onClose={() => setShowWalletModal(false)}
          onConnect={handleWalletConnect}
        />
      )}
      
      {showPurchaseModal && selectedProduct && (
        <PurchaseModal 
          product={selectedProduct}
          walletAddress={connectedWallet || ''}
          onClose={handleClosePurchase}
        />
      )}
    </div>
  );
}