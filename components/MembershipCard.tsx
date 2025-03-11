// components/MembershipCard.tsx

import React from 'react';

interface MembershipCardProps {
  type: 'general' | 'standard';
  duration: '1 month' | '3 month';
  price: { men: number; women: number };
  features: {
    washroomAccess: boolean;
    equipmentAccess: boolean;
    personalTrainer: boolean;
    fatLossClasses: boolean;
    dietPlan: boolean;
  };
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  type,
  duration,
  price,
  features,
}) => {
  return (
    <div className="bg-black text-red-600 p-6 rounded-lg w-80 m-4">
      <div className="flex flex-col items-start">
        <h2 className="text-xl p-4 font-bold">{duration} {type.toUpperCase()} MEMBERSHIP</h2>
        <div className="text-sm mt-2">
          <span>₹ {price.men} (MEN)</span> | <span>₹ {price.women} (WOMEN)</span>
        </div>
      </div>
      <div className="mt-4">
        <ul>
          <li className={`text-sm ${features.washroomAccess ? 'text-white' : 'text-gray-500 line-through'}`}>
            Washroom Access
          </li>
          <li className={`text-sm ${features.equipmentAccess ? 'text-white' : 'text-gray-500 line-through'}`}>
            Unlimited Equipment Access
          </li>
          <li className={`text-sm ${features.personalTrainer ? 'text-white' : 'text-gray-500 line-through'}`}>
            Personal Trainer
          </li>
          <li className={`text-sm ${features.fatLossClasses ? 'text-white' : 'text-gray-500 line-through'}`}>
            Fat Loss Classes
          </li>
          <li className={`text-sm ${features.dietPlan ? 'text-white' : 'text-gray-500 line-through'}`}>
            Diet Plan
          </li>
        </ul>
      </div>
      <button className="bg-red-800 text-white py-2 px-4 rounded mt-4 w-full hover:bg-red-600">
        JOIN NOW
      </button>
    </div>
  );
};

export default MembershipCard;
