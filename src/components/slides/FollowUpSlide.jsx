import React from 'react';

const FollowUpSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow mb-4">
          <p className="text-xl font-semibold mb-3">Patient Education Topics:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Allergic rhinitis as cause of persistent cough</li>
            <li>Proper medication use and expectations</li>
            <li>Environmental control measures</li>
            <li>Nasal saline irrigation technique</li>
            <li>When to seek medical attention</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg shadow border-l-4 border-yellow-500">
          <p className="text-xl font-semibold mb-3">Return-to-Clinic Indicators:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Symptoms worsen or don't continue to improve</li>
            <li>Fever, purulent discharge, facial pain develop</li>
            <li>Medication side effects occur</li>
            <li>New symptoms develop</li>
          </ul>
        </div>
        
        <div className="mt-4 p-3 bg-green-50 rounded-lg shadow border-l-4 border-green-500">
          <p className="font-semibold">Follow-Up Appointment:</p>
          <ul className="list-disc pl-6 mt-1">
            <li>Schedule for 3 months</li>
            <li>Consider sooner if symptoms persist/worsen</li>
            <li>May need seasonal adjustments to regimen</li>
            <li>Annual assessment for chronic management</li>
          </ul>
        </div>
      </div>
      
      <div className="md:w-1/2 p-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p className="text-center font-semibold mb-4">Seasonal Pollen Calendar</p>
          <div className="relative h-64">
            {/* Month headers */}
            <div className="absolute inset-x-0 top-0 flex border-b">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                <div key={month} className="flex-1 text-center text-xs py-2">{month}</div>
              ))}
            </div>
            
            {/* Tree Pollen */}
            <div className="absolute left-0 right-0 top-12 flex items-center h-10">
              <span className="w-16 text-xs font-semibold">Tree</span>
              <div className="flex-1 flex">
                <div className="w-[25%] h-6 bg-green-200 rounded-l" style={{marginLeft: '8.33%'}}></div>
                <div className="w-[16.67%] h-6 bg-green-400"></div>
                <div className="w-[8.33%] h-6 bg-green-200 rounded-r"></div>
              </div>
            </div>
            
            {/* Grass Pollen */}
            <div className="absolute left-0 right-0 top-24 flex items-center h-10">
              <span className="w-16 text-xs font-semibold">Grass</span>
              <div className="flex-1 flex">
                <div className="w-[8.33%] h-6 bg-yellow-200 rounded-l" style={{marginLeft: '33.33%'}}></div>
                <div className="w-[16.67%] h-6 bg-yellow-400"></div>
                <div className="w-[16.67%] h-6 bg-yellow-200 rounded-r"></div>
              </div>
            </div>
            
            {/* Weed Pollen */}
            <div className="absolute left-0 right-0 top-36 flex items-center h-10">
              <span className="w-16 text-xs font-semibold">Weed</span>
              <div className="flex-1 flex">
                <div className="w-[8.33%] h-6 bg-red-200 rounded-l" style={{marginLeft: '50%'}}></div>
                <div className="w-[16.67%] h-6 bg-red-400"></div>
                <div className="w-[8.33%] h-6 bg-red-200 rounded-r"></div>
              </div>
            </div>
            
            {/* Mold Spores */}
            <div className="absolute left-0 right-0 top-48 flex items-center h-10">
              <span className="w-16 text-xs font-semibold">Mold</span>
              <div className="flex-1 flex">
                <div className="w-[33.33%] h-6 bg-blue-200 rounded-l" style={{marginLeft: '16.67%'}}></div>
                <div className="w-[33.33%] h-6 bg-blue-300 rounded-r"></div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="absolute left-0 right-0 bottom-0 flex flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <div className="h-4 w-4 bg-green-400 rounded mr-2"></div>
                <span className="text-xs">High Tree</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-yellow-400 rounded mr-2"></div>
                <span className="text-xs">High Grass</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-red-400 rounded mr-2"></div>
                <span className="text-xs">High Weed</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-blue-300 rounded mr-2"></div>
                <span className="text-xs">High Mold</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-4">Approximate pollen seasons - may vary by geographic location</p>
        </div>
        
        <div className="mt-4 bg-gray-50 p-3 rounded-lg shadow">
          <p className="font-semibold">Patient Resources:</p>
          <ul className="list-disc pl-6 mt-2 text-sm">
            <li>American Academy of Allergy, Asthma & Immunology</li>
            <li>Allergy & Asthma Network</li>
            <li>Patient information handouts on:
              <ul className="list-disc pl-6 mt-1">
                <li>Nasal spray technique</li>
                <li>Saline irrigation instructions</li>
                <li>Allergen avoidance measures</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FollowUpSlide;