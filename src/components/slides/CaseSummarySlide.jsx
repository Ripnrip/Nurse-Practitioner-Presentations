import React from 'react';

const CaseSummarySlide = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">The "WOW" Factor: My Diagnostic Journey</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500 flex flex-col h-full">
          <p className="font-bold text-purple-800 mb-2">What Made This Case Interesting:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm flex-grow">
            <li><span className="font-semibold">Initial misleading presentation</span> suggesting ACE inhibitor-induced cough</li>
            <li><span className="font-semibold">Persistence despite medication change</span> from lisinopril to amlodipine</li>
            <li><span className="font-semibold">Failed response</span> to antibiotics and steroids</li>
            <li><span className="font-semibold">Unexpected resolution</span> with antihistamine therapy</li>
            <li><span className="font-semibold">Minimal classic allergic symptoms</span> masking the underlying etiology</li>
          </ul>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 flex flex-col h-full">
          <p className="font-bold text-blue-800 mb-2">Key Learning Points:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm flex-grow">
            <li>Allergic rhinitis can manifest primarily as cough in older adults</li>
            <li>Diagnostic "red herrings" in polypharmacy patients</li>
            <li>Importance of systematic approach when initial treatments fail</li>
            <li>Value of therapeutic trials in diagnostic process</li>
            <li>Consider atypical presentations of common conditions in older adults</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
        <p className="font-bold text-green-800 mb-2">Systematic Diagnostic Approach:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-white rounded-lg shadow">
            <p className="font-semibold mb-1 text-center">1. Question Initial Diagnosis</p>
            <p className="text-sm">When cough persisted after stopping ACE inhibitor, recognized need to reconsider diagnosis</p>
          </div>
          <div className="p-3 bg-white rounded-lg shadow">
            <p className="font-semibold mb-1 text-center">2. Evaluate Treatment Response</p>
            <p className="text-sm">Failed response to antibiotics and steroids suggested non-infectious etiology</p>
          </div>
          <div className="p-3 bg-white rounded-lg shadow">
            <p className="font-semibold mb-1 text-center">3. Consider Atypical Presentations</p>
            <p className="text-sm">Hypothesis of allergic etiology despite minimal nasal symptoms led to successful treatment</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
        <p className="font-bold text-center mb-2">Clinical Pearl:</p>
        <p className="text-center">In older adults with persistent cough, consider allergic rhinitis even in the absence of typical allergic symptoms. This case demonstrates the value of therapeutic trials and systematic diagnostic thinking.</p>
      </div>
    </div>
  );
};

export default CaseSummarySlide;