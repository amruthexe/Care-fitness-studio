import React from 'react';
import { Dumbbell, Check } from 'lucide-react';

interface PlanProps {
  duration: string;
  price: number;
  features: string[];
}

const PricingCard: React.FC<PlanProps> = ({ duration, price, features }) => (
  <div className="bg-black border border-red-600 rounded-lg p-8 transition-transform hover:scale-105 hover:shadow-2xl">
    <div className="flex justify-center mb-6">
      <div className="bg-red-600 rounded-full p-4">
        <Dumbbell size={32} className="text-white" />
      </div>
    </div>
    
    <h2 className="text-3xl font-bold text-white mb-4">{duration}</h2>
    <div className="mb-6">
      <span className="text-red-600 text-4xl font-bold">₹{price.toLocaleString()}</span>
      <span className="text-gray-400 text-sm">(MEN / WOMEN)</span>
    </div>
    
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-white">
          <Check size={20} className="text-red-600 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    <button className="w-full py-3 border-2 border-red-600 text-white font-semibold rounded hover:bg-red-600 transition-colors">
      JOIN NOW
    </button>
  </div>
);

function Personal() {
  const plans = [
    {
      duration: "1 MONTH",
      price: 3999,
      features: [
        "Washroom Access",
        "Unlimited Equipments Access",
        "Personal Trainer",
        "Fat Loss Classes",
        "Diet Plan"
      ]
    },
    {
      duration: "2 MONTH",
      price: 7000,
      features: [
        "Washroom Access",
        "Unlimited Equipments Access",
        "Personal Trainer",
        "Fat Loss Classes",
        "Diet Plan"
      ]
    },
    {
      duration: "3 MONTH",
      price: 10000,
      features: [
        "Washroom Access",
        "Unlimited Equipments Access",
        "Personal Trainer",
        "Fat Loss Classes",
        "Diet Plan"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">PERSONAL TRAINING</h1>
        <p className="text-xl text-gray-400 text-center mb-12">
          One-on-One Session Personalised workout plan for each
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              duration={plan.duration}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Personal;