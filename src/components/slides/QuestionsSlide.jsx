import React from 'react';

const QuestionsSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-70"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)',
        backgroundSize: '40px 40px',
        opacity: 0.1
      }}></div>

      {/* Medical symbols floating in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl opacity-10 transform -rotate-12">⚕️</div>
        <div className="absolute top-20 right-20 text-6xl opacity-10 transform rotate-12">🔬</div>
        <div className="absolute bottom-20 left-20 text-6xl opacity-10 transform rotate-45">💊</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 transform -rotate-45">🧬</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center bg-white bg-opacity-90 p-12 rounded-2xl shadow-xl max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
          Thank You!
        </h1>
        
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-8"></div>
        
        <h2 className="text-3xl font-semibold mb-10 text-gray-700">Questions?</h2>
        
        <div className="text-center space-y-3">
          <p className="text-xl font-semibold text-gray-800">Your Name, Credentials</p>
          <p className="text-lg text-gray-600">Email: your.email@institution.edu</p>
        </div>

        {/* Decorative bottom border */}
        <div className="mt-10 flex justify-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.45,22.34,121.09,43.44,188.3,49.64,225.65,53.4,262.5,52.67,295.73,49.42,299.18,48.92,314.41,56.63,321.39,56.44Z" 
                fill="#3b82f610">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default QuestionsSlide;