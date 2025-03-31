import React from 'react';

const DifferentialAnalysisSlide = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Differential Diagnosis Analysis</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-3 px-4 text-left">Diagnosis</th>
              <th className="py-3 px-4 text-left">Evidence Supporting</th>
              <th className="py-3 px-4 text-left">Evidence Against</th>
              <th className="py-3 px-4 text-left">Likelihood</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t bg-red-50">
              <td className="py-3 px-4 font-semibold">ACE inhibitor-induced cough [T88.7]</td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>Temporal relationship with lisinopril initiation</li>
                  <li>Known side effect of ACE inhibitors</li>
                </ul>
              </td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>Cough persisted despite discontinuation</li>
                  <li>No improvement after 3 months off medication</li>
                </ul>
              </td>
              <td className="py-3 px-4 font-bold text-red-600">RULED OUT</td>
            </tr>
            <tr className="border-t bg-yellow-50">
              <td className="py-3 px-4 font-semibold">Post-infectious cough syndrome [R05.3]</td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>Episode of URI symptoms preceded cough</li>
                  <li>Fever and congestion in December</li>
                </ul>
              </td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>Failed to respond to antibiotics</li>
                  <li>Failed to respond to steroids</li>
                  <li>Negative chest X-ray</li>
                </ul>
              </td>
              <td className="py-3 px-4 font-bold text-yellow-600">LESS LIKELY</td>
            </tr>
            <tr className="border-t bg-yellow-50">
              <td className="py-3 px-4 font-semibold">GERD-related cough [K21.9]</td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>History of GERD since 2018</li>
                  <li>Cough can be a manifestation of GERD</li>
                </ul>
              </td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>On acid suppression therapy (Protonix)</li>
                  <li>No reported reflux symptoms</li>
                  <li>Improved with antihistamine, not with PPI</li>
                </ul>
              </td>
              <td className="py-3 px-4 font-bold text-yellow-600">LESS LIKELY</td>
            </tr>
            <tr className="border-t bg-yellow-50">
              <td className="py-3 px-4 font-semibold">Cough-variant asthma [J45.909]</td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>Chronic cough as primary symptom</li>
                  <li>Reported dyspnea on exertion</li>
                </ul>
              </td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>Normal spirometry results (FEV1/FVC: 0.80)</li>
                  <li>No wheezing on examination</li>
                  <li>No history of atopy</li>
                </ul>
              </td>
              <td className="py-3 px-4 font-bold text-yellow-600">LESS LIKELY</td>
            </tr>
            <tr className="border-t bg-green-50">
              <td className="py-3 px-4 font-semibold">Allergic Rhinitis [J30.2]</td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>Dramatic improvement with antihistamine</li>
                  <li>Clear rhinorrhea initially reported</li>
                  <li>Chronic nature of symptoms</li>
                  <li>Normal spirometry and chest X-ray</li>
                </ul>
              </td>
              <td className="py-3 px-4">
                <ul className="list-disc pl-4">
                  <li>Minimal nasal symptoms at presentation</li>
                  <li>Absence of typical allergic symptoms</li>
                </ul>
              </td>
              <td className="py-3 px-4 font-bold text-green-600">MOST LIKELY</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 bg-blue-50 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-blue-800 mb-2">Diagnostic Reasoning Summary:</h3>
        <p>The initial suspicion of ACE inhibitor-induced cough was warranted based on timing, but persistence after medication change required broadening the differential. The dramatic response to antihistamine therapy ultimately confirmed allergic rhinitis despite the atypical presentation with cough as the predominant symptom.</p>
      </div>
    </div>
  );
};

export default DifferentialAnalysisSlide;