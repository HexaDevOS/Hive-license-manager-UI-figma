import { Product } from '../App';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] cursor-pointer"
      onClick={onClick}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
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

        {/* Title and Price */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white group-hover:text-cyan-400 transition-colors">
            {product.name}
          </h3>
          {product.price && (
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              {product.price}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-white/60 mb-6">
          {product.description}
        </p>

        {/* CTA Button */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-300">
          <span className="text-white/80 group-hover:text-cyan-400">Purchase License</span>
          <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
}