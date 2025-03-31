import React from 'react';

const TitleSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Cough Management in Primary Care
      </h1>
      <div className="text-center mb-8">
        <p className="text-lg">Gina P. Hoyos, BSN, RN</p>
        <p className="text-lg">NUR 680 OLDER ADULT</p>
        <p className="text-lg">March 30, 2025</p>
      </div>
      {/* Use this div if the image isn't available yet */}
      {/*
      <div 
        className="w-full max-w-3xl rounded-lg shadow-lg bg-blue-100 h-[400px] flex items-center justify-center"
      >
        <p className="text-xl text-gray-700">
          Medical Professional Background Image
        </p>
      </div>
      */}
      
      {/* Use this image when available */}
      <img 
        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2400&q=80"
        alt="Female doctor in professional setting" 
        className="w-full max-w-3xl rounded-lg shadow-lg opacity-85"
      />
    </div>
  );
};

export default TitleSlide; 