import React from 'react';

const TreatmentAlgorithmSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 p-4">
        <p className="text-xl font-semibold mb-3">KEY PRINCIPLES:</p>
        <ol className="list-decimal pl-8 space-y-2">
          <li><span className="font-semibold">Allergen avoidance</span> is the foundation</li>
          <li><span className="font-semibold">Stepwise approach</span> based on severity</li>
          <li><span className="font-semibold">Intranasal corticosteroids</span> are first-line for moderate-severe symptoms</li>
          <li><span className="font-semibold">Second-generation antihistamines</span> preferred for older adults</li>
          <li><span className="font-semibold">Consider comorbidities</span> when selecting therapies</li>
          <li><span className="font-semibold">Assess response</span> and adjust as needed</li>
        </ol>
      </div>
      
      <div className="md:w-2/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <p className="text-center font-semibold mb-4">Allergic Rhinitis Treatment Algorithm</p>
          <div className="relative">
            <svg viewBox="0 0 600 400" className="w-full">
              {/* Start node */}
              <rect x="250" y="10" width="100" height="40" rx="5" fill="#e5edff" stroke="#3b82f6" />
              <text x="300" y="35" textAnchor="middle" fontSize="14">Allergen Avoidance + Patient Education</text>
              
              {/* Arrow down */}
              <line x1="300" y1="50" x2="300" y2="70" stroke="#3b82f6" strokeWidth="2" />
              <polygon points="300,80 295,70 305,70" fill="#3b82f6" />
              
              {/* Severity assessment */}
              <rect x="200" y="80" width="200" height="40" rx="5" fill="#e5edff" stroke="#3b82f6" />
              <text x="300" y="105" textAnchor="middle" fontSize="14">Assess Symptom Severity</text>
              
              {/* Branches */}
              <line x1="300" y1="120" x2="300" y2="130" stroke="#3b82f6" strokeWidth="2" />
              <line x1="300" y1="130" x2="150" y2="130" stroke="#3b82f6" strokeWidth="2" />
              <line x1="300" y1="130" x2="450" y2="130" stroke="#3b82f6" strokeWidth="2" />
              <line x1="150" y1="130" x2="150" y2="160" stroke="#3b82f6" strokeWidth="2" />
              <line x1="450" y1="130" x2="450" y2="160" stroke="#3b82f6" strokeWidth="2" />
              
              <polygon points="150,160 145,150 155,150" fill="#3b82f6" />
              <polygon points="450,160 445,150 455,150" fill="#3b82f6" />
              
              {/* Mild and Moderate-Severe boxes */}
              <rect x="75" y="160" width="150" height="40" rx="5" fill="#dbeafe" stroke="#3b82f6" />
              <text x="150" y="185" textAnchor="middle" fontSize="14">Mild/Intermittent</text>
              
              <rect x="375" y="160" width="150" height="40" rx="5" fill="#bfdbfe" stroke="#3b82f6" />
              <text x="450" y="185" textAnchor="middle" fontSize="14">Moderate-Severe/Persistent</text>
              
              {/* Arrows to treatments */}
              <line x1="150" y1="200" x2="150" y2="230" stroke="#3b82f6" strokeWidth="2" />
              <line x1="450" y1="200" x2="450" y2="230" stroke="#3b82f6" strokeWidth="2" />
              
              <polygon points="150,230 145,220 155,220" fill="#3b82f6" />
              <polygon points="450,230 445,220 455,220" fill="#3b82f6" />
              
              {/* Treatment options */}
              <rect x="75" y="230" width="150" height="40" rx="5" fill="#dbeafe" stroke="#3b82f6" />
              <text x="150" y="255" textAnchor="middle" fontSize="14">Second-Gen Antihistamine</text>
              
              <rect x="375" y="230" width="150" height="40" rx="5" fill="#bfdbfe" stroke="#3b82f6" />
              <text x="450" y="255" textAnchor="middle" fontSize="14">Intranasal Corticosteroid</text>
              
              {/* Arrows to inadequate response */}
              <line x1="150" y1="270" x2="150" y2="290" stroke="#3b82f6" strokeWidth="2" />
              <line x1="450" y1="270" x2="450" y2="290" stroke="#3b82f6" strokeWidth="2" />
              <line x1="150" y1="290" x2="300" y2="290" stroke="#3b82f6" strokeWidth="2" />
              <line x1="450" y1="290" x2="300" y2="290" stroke="#3b82f6" strokeWidth="2" />
              <line x1="300" y1="290" x2="300" y2="310" stroke="#3b82f6" strokeWidth="2" />
              
              <polygon points="300,310 295,300 305,300" fill="#3b82f6" />
              
              {/* Inadequate response */}
              <rect x="200" y="310" width="200" height="40" rx="5" fill="#dbeafe" stroke="#3b82f6" />
              <text x="300" y="335" textAnchor="middle" fontSize="14">Inadequate Response?</text>
              
              {/* Final options */}
              <line x1="300" y1="350" x2="300" y2="370" stroke="#3b82f6" strokeWidth="2" />
              <polygon points="300,370 295,360 305,360" fill="#3b82f6" />
              
              <rect x="150" y="370" width="300" height="60" rx="5" fill="#bfdbfe" stroke="#3b82f6" />
              <text x="300" y="395" textAnchor="middle" fontSize="14">Consider Additional Options:</text>
              <text x="300" y="415" textAnchor="middle" fontSize="12">• Combination therapy • Add nasal antihistamine</text>
              <text x="300" y="430" textAnchor="middle" fontSize="12">• Leukotriene inhibitor • Allergy referral/testing</text>
            </svg>
          </div>
          <p className="text-xs text-center mt-2">Adapted from clinical practice guidelines for allergic rhinitis</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentAlgorithmSlide;