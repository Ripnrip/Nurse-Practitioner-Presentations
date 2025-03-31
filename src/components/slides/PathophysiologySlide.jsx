import React from 'react';

const PathophysiologySlide = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
        <p className="text-lg">
          The cough reflex is initiated by stimulation of sensory receptors in the respiratory tract, mediated 
          primarily via the vagus nerve, and modulated by higher central nervous system input. It involves 
          the glottis, chest muscles, and accessory respiratory muscles. While cough can occur at any 
          age, chronic cough is more prevalent in adults aged 50–60 years, particularly among women 
          who have heightened cough reflex sensitivity.
        </p>
      </div>

      <div className="mt-4 bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
        <p className="text-lg">
          Cough is a symptom rather than a disease and can result from various underlying pathologies 
          such as infections (e.g., common cold, pneumonia, TB), inflammatory conditions (e.g., asthma, 
          COPD), environmental exposures, or medication side effects (e.g., ACE inhibitors).
        </p>
      </div>
      
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-blue-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Cough Reflex Pathway</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Stimulation of cough receptors in airways</li>
            <li>Afferent signal transmission via vagus nerve</li>
            <li>Processing in the medulla's cough center</li>
            <li>Efferent signals to respiratory muscles</li>
            <li>Coordinated muscle action producing cough</li>
          </ol>
        </div>
        
        <div className="flex-1 bg-blue-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Epidemiological Factors</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>More prevalent in adults aged 50-60 years</li>
            <li>Higher incidence in women (heightened cough reflex sensitivity)</li>
            <li>Frequently encountered in primary care (10-20% of consultations)</li>
            <li>Seasonal variations with respiratory infections</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PathophysiologySlide;