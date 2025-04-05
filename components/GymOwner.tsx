import React from 'react';
import Image from 'next/image';

const GymOwner: React.FC = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
        <h3 className="text-4xl font-semibold mb-4 text-red-800">
              Proprietor
            </h3>
          {/* Image of the gym owner with rounded corners */}
          <div className="w-full sm:w-64 h-80 sm:h-64 rounded-xl overflow-hidden mb-6">
            <Image
              src="/assets/img/pro.jpg"
              alt="Gym Owner"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Gym owner details */}
          <div className="text-center">
           
            <h2 className="text-3xl font-semibold mb-4">
              Supreeth Malur
            </h2>
            <p className="text-lg mb-4">
              Instagram: <a href="https://www.instagram.com/aesthetic_muscle0204/" className="text-blue-500">@aesthetic_muscle0204</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymOwner;
