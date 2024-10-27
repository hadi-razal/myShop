import { ArrowRight, Globe, ShoppingBag, Star, Users } from 'lucide-react'

const Hero = () => {

    const stats = [
        { icon: <Users className="w-6 h-6" />, value: '300+', label: 'Active Sellers' },
        { icon: <ShoppingBag className="w-6 h-6" />, value: '5K+', label: 'Products Listed' },
        { icon: <Globe className="w-6 h-6" />, value: '180+', label: 'Countries' },
        { icon: <Star className="w-6 h-6" />, value: '4.9/5', label: 'Seller Rating' },
    ];

    return (
        <div className="min-h-[calc(100vh-80px)] bg-gray-900 text-white relative overflow-hidden">
            <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                {/* Highlighted Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-500/30 border border-amber-500/20 text-amber-300 py-2.5 px-6 rounded-full mb-10 animate-fade-in backdrop-blur-sm shadow-lg">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium tracking-wide">Premium Seller Platform</span>
                </div>

                {/* Hero Content */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                    Your Products, <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Our Platform</span>
                </h1>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Create a stunning online store, showcase your products, and reach customers worldwide. Join thousands of successful sellers on the most premium e-commerce platform.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-row items-center justify-center gap-6 mb-20">
                    <button className="group w-[190px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 hover:opacity-90 transition-all duration-300">
                        Get Started
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="group w-[190px] border border-white text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 hover:opacity-90 transition-all duration-300">
                        Demo Store
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {stats.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-lg hover:bg-gray-800/60 hover:border-gray-600 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center text-blue-400 mb-3">
                                {item.icon}
                            </div>
                            <div className="text-3xl font-bold mb-2">{item.value}</div>
                            <div className="text-gray-400 text-sm font-medium">{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Hero