import React from 'react';
import { Star, Users, ArrowRight, ShoppingBag, Globe, Store } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-500/30 border border-amber-500/20 text-amber-300 py-2.5 px-6 rounded-full mb-10 animate-fade-in backdrop-blur-sm shadow-lg">
          <Star className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">Premium Seller Platform</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          Your Products,
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text"> Our Platform</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Create a stunning online store, showcase your products, and reach customers worldwide.
          Join thousands of successful sellers on the most premium e-commerce platform.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <button className="group bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-medium
            hover:opacity-90 transition-all duration-300 
            flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30
            border border-blue-400/20 backdrop-blur-sm">
            Start Selling Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="group bg-gray-800 text-white px-8 py-4 rounded-xl font-medium
            hover:bg-gray-700 transition-all duration-300
            flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-600
            shadow-lg shadow-black/20">
            View Demo Store
            <Store className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <Users className="w-6 h-6" />, value: '100+', label: 'Active Sellers' },
            { icon: <ShoppingBag className="w-6 h-6" />, value: '1000+', label: 'Products Listed' },
            { icon: <Globe className="w-6 h-6" />, value: '180+', label: 'Countries' },
            { icon: <Star className="w-6 h-6" />, value: '4.8/5', label: 'Seller Rating' },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-gray-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700 
                hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/60
                shadow-lg shadow-black/20"
            >
              <div className="flex items-center justify-center gap-2 text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-gray-400 text-sm font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
