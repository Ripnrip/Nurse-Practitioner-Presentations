import React from 'react';

const DifferentialAnalysisSlide = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-3 text-left">Diagnosis</th>
              <th className="py-2 px-3 text-left">Evidence Supporting</th>
              <th className="py-2 px-3 text-left">Evidence Against</th>
              <th className="py-2 px-3 text-left">Likelihood</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t bg-green-50">
              <td className="py-2 px-3 font-semibold">Allergic Rhinitis</td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Improved with antihistamine</li>
                  <li>Clear rhinorrhea initially</li>
                </ul>
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Minimal nasal symptoms now</li>
                </ul>
              </td>
              <td className="py-2 px-3 font-bold text-green-600">MOST LIKELY</td>
            </tr>
            <tr className="border-t bg-yellow-50">
              <td className="py-2 px-3 font-semibold">Post-Viral Cough Syndrome</td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>URI symptoms preceded</li>
                  <li>Persistent cough</li>
                </ul>
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Dramatic antihistamine response</li>
                </ul>
              </td>
              <td className="py-2 px-3 font-bold text-yellow-600">POSSIBLE</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">GERD-related Cough</td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>History of GERD</li>
                </ul>
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>On PPI therapy</li>
                  <li>Denies reflux symptoms</li>
                  <li>Improved with antihistamine</li>
                </ul>
              </td>
              <td className="py-2 px-3">LESS LIKELY</td>
            </tr>
            <tr className="border-t bg-red-50">
              <td className="py-2 px-3 font-semibold">ACE Inhibitor Cough</td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>History of Lisinopril use</li>
                </ul>
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Cough began after discontinuation</li>
                </ul>
              </td>
              <td className="py-2 px-3 font-bold text-red-600">RULED OUT</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">Asthma/CVA</td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Cough as primary symptom</li>
                </ul>
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Normal spirometry</li>
                  <li>No wheezing</li>
                </ul>
              </td>
              <td className="py-2 px-3">LESS LIKELY</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">Bacterial Infection</td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Initially treated as infection</li>
                </ul>
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Failed antibiotics</li>
                  <li>Negative CXR</li>
                  <li>No fever or purulence</li>
                </ul>
              </td>
              <td className="py-2 px-3">LESS LIKELY</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DifferentialAnalysisSlide;