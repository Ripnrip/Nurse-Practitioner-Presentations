import React from 'react';

const NasalSprayTechniqueSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <p className="text-xl font-semibold mb-4">PROPER MDI INHALER TECHNIQUE:</p>
        
        <div className="mb-4 p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-bold">1. Prepare:</p>
          <ul className="list-disc pl-6 mt-1">
            <li>Remove cap and shake inhaler well</li>
            <li>Exhale completely away from inhaler</li>
            <li>Hold inhaler upright with mouthpiece at bottom</li>
          </ul>
        </div>
        
        <div className="mb-4 p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-bold">2. Position:</p>
          <ul className="list-disc pl-6 mt-1">
            <li>Option 1: Place mouthpiece between lips, sealed tightly</li>
            <li>Option 2: Hold 1-2 inches from open mouth (with spacer)</li>
            <li>Tilt head slightly back</li>
          </ul>
        </div>
        
        <div className="mb-4 p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-bold">3. Administer:</p>
          <ul className="list-disc pl-6 mt-1">
            <li>Begin slow, deep breath through mouth</li>
            <li>Press canister down firmly while continuing to inhale</li>
            <li>Continue slow, deep breath for 3-5 seconds</li>
          </ul>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-bold">4. After Use:</p>
          <ul className="list-disc pl-6 mt-1">
            <li>Hold breath for 10 seconds or as long as comfortable</li>
            <li>Wait 30-60 seconds before second puff (if prescribed)</li>
            <li>Replace cap and rinse mouth if using corticosteroid inhaler</li>
          </ul>
        </div>
      </div>
      
      <div className="md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <p className="text-xl font-semibold mb-4">ADDITIONAL MEDICATION TECHNIQUES:</p>
          
          <div className="mb-4 p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
            <p className="font-bold">Tessalon Perles (Benzonatate):</p>
            <ul className="list-disc pl-6 mt-1">
              <li>Swallow capsules whole - do not chew, crush, or dissolve</li>
              <li>Take with full glass of water</li>
              <li>Temporary numbness of mouth/throat may occur</li>
              <li>Take as prescribed (typically 100mg TID PRN)</li>
            </ul>
          </div>
          
          <div className="mb-4 p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
            <p className="font-bold">PPI Administration (for GERD-related cough):</p>
            <ul className="list-disc pl-6 mt-1">
              <li>Take 30-60 minutes before first meal of the day</li>
              <li>Swallow tablets whole - do not crush or chew</li>
              <li>For optimal effect, take consistently at same time daily</li>
              <li>Consider twice daily dosing if symptoms persist</li>
            </ul>
          </div>
        </div>
        
        <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
          <p className="font-semibold">Common Technique Errors:</p>
          <ul className="list-disc pl-6 mt-1 text-sm">
            <li><span className="font-semibold">Not shaking inhaler</span> - reduces medication delivery</li>
            <li><span className="font-semibold">Inhaling too rapidly</span> - decreases lung deposition</li>
            <li><span className="font-semibold">Poor coordination</span> - pressing canister before inhaling</li>
            <li><span className="font-semibold">Not using spacer</span> - when recommended for coordination issues</li>
            <li><span className="font-semibold">Not waiting between puffs</span> - reduces effectiveness</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NasalSprayTechniqueSlide;