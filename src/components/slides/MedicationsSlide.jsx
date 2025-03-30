import React from 'react';

const MedicationsSlide = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-3 text-left">Medication</th>
              <th className="py-2 px-3 text-left">Dosage</th>
              <th className="py-2 px-3 text-left">Indication</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-3">Meclizine HCl</td>
              <td className="py-2 px-3">25 mg PRN BID</td>
              <td className="py-2 px-3">Vertigo</td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3">Xarelto</td>
              <td className="py-2 px-3">20 mg daily</td>
              <td className="py-2 px-3">Atrial Fibrillation</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3">Protonix</td>
              <td className="py-2 px-3">20 mg PRN daily</td>
              <td className="py-2 px-3">GERD</td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3">Ezetimibe</td>
              <td className="py-2 px-3">10 mg QHS</td>
              <td className="py-2 px-3">Hyperlipidemia</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3">Lexapro</td>
              <td className="py-2 px-3">20 mg daily</td>
              <td className="py-2 px-3">Anxiety</td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3">Tramadol HCl</td>
              <td className="py-2 px-3">50 mg PRN TID</td>
              <td className="py-2 px-3">Pain</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3">Amiodarone HCl</td>
              <td className="py-2 px-3">100 mg 0.5 tab daily</td>
              <td className="py-2 px-3">Atrial Fibrillation</td>
            </tr>
            <tr className="border-t bg-blue-50 font-bold">
              <td className="py-2 px-3">Zyrtec</td>
              <td className="py-2 px-3">10 mg Chewable daily</td>
              <td className="py-2 px-3">Allergic Rhinitis (Recently started)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
        <p className="font-bold">Key Note:</p>
        <p>Lisinopril discontinued <em>prior to</em> cough onset</p>
      </div>
    </div>
  );
};

export default MedicationsSlide;