import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "2 product listings",
        "Basic analytics",
        "24/7 support",
        "Mobile-optimized store",
        "Basic SEO tools",
      ]
    },
    {
      name: "Basic",
      price: "199",
      features: [
        "100 product listings",
        "Enhanced analytics",
        "24/7 support",
        "Mobile-optimized store",
        "Custom branding",
      ]
    },
    {
      name: "Pro",
      price: "299",
      popular: true,
      features: [
        "500+ product listings",
        "Advanced analytics",
        "Multi-currency support",
        "Marketing tools",
        "Inventory management",
      ]
    },
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-gray-800 relative  rounded-xl p-8 ${plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 py-1 px-3 bg-blue-400 text-white rounded-md text-sm font-medium mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">
                {plan.name}
              </h3>

              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">
                  ₹{plan.price}
                </span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium
                  flex items-center justify-center gap-2 transition-colors
                  ${plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Simple Footer */}
        <div className="text-center mt-12 text-gray-300">
          <p>All plans include a 14-day free trial</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
