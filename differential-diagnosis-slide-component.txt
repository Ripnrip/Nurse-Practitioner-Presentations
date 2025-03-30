import React from 'react';

const DifferentialDiagnosisSlide = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-3 text-left">Feature</th>
              <th className="py-2 px-3 text-left">Allergic Rhinitis</th>
              <th className="py-2 px-3 text-left">Common Cold</th>
              <th className="py-2 px-3 text-left">Sinusitis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">Onset</td>
              <td className="py-2 px-3">Rapid after exposure</td>
              <td className="py-2 px-3">Gradual</td>
              <td className="py-2 px-3">May follow cold</td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3 font-semibold">Duration</td>
              <td className="py-2 px-3">Persistent with exposure</td>
              <td className="py-2 px-3">3-10 days</td>
              <td className="py-2 px-3">&gt;10 days</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">Nasal Discharge</td>
              <td className="py-2 px-3">Clear, watery</td>
              <td className="py-2 px-3">Clear → thick, discolored</td>
              <td className="py-2 px-3">Thick, purulent</td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3 font-semibold">Nasal Congestion</td>
              <td className="py-2 px-3">Variable</td>
              <td className="py-2 px-3">Common</td>
              <td className="py-2 px-3">Severe</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">Sneezing</td>
              <td className="py-2 px-3">Prominent</td>
              <td className="py-2 px-3">Mild to moderate</td>
              <td className="py-2 px-3">Minimal</td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3 font-semibold">Itching</td>
              <td className="py-2 px-3">Common (nose, eyes)</td>
              <td className="py-2 px-3">Rare</td>
              <td className="py-2 px-3">Rare</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">Facial Pain/Pressure</td>
              <td className="py-2 px-3">Uncommon</td>
              <td className="py-2 px-3">Uncommon</td>
              <td className="py-2 px-3">Common</td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3 font-semibold">Fever</td>
              <td className="py-2 px-3">Absent</td>
              <td className="py-2 px-3">Low-grade possible</td>
              <td className="py-2 px-3">May be present</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">Response to Antihistamines</td>
              <td className="py-2 px-3">Good</td>
              <td className="py-2 px-3">Poor</td>
              <td className="py-2 px-3">Poor</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm italic text-center">
        Source: Adapted from clinical practice guidelines for allergic rhinitis and respiratory infections
      </div>
    </div>
  );
};

export default DifferentialDiagnosisSlide;