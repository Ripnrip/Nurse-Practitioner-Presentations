import React from 'react';

const ReferencesSlide = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">References</h3>
        
        <div className="space-y-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm">
              Kennedy-Malone, L., & Duffy, E. G. (2022). <span className="italic">Advanced practice nursing in the care of older adults</span>. F.A. Davis Company.
            </p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm">
              Sonoda, K., & Nayak, R. (2024). Chronic cough: Evaluation and management. <span className="italic">American Family Physician, 110</span>(2), 167–173.
            </p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm">
              Weinberger, S. E., & Saukkonen, K. (2025). Evaluation and treatment of subacute and chronic cough in adults. <span className="italic">UpToDate</span>. Retrieved March 30, 2025, from https://www.uptodate.com/contents/evaluation-and-treatment-of-subacute-and-chronic-cough-in-adults
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-center text-gray-500">
        Note: This presentation is for educational purposes only. Always consult current clinical guidelines and primary literature for the most up-to-date information.
      </p>
    </div>
  );
};

export default ReferencesSlide;