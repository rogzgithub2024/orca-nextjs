'use client';

 
import { useState } from 'react';

interface PointOfContactSectionProps {
  formData: {
    pointOfContact: string;
    otherPointOfContact: string;
  };
  onDataChange: (field: string, value: string) => void;
}

export default function PointOfContactSection({
  formData,
  onDataChange,
}: PointOfContactSectionProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div
        className="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3 r-p-3">
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
          </svg>
          <h3 className="text-lg font-semibold text-black">Point of Contact</h3>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm r-mr-3"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="bg-gray-50 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3 ">
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="pointOfContact"
              value="Same as Main Owner"
              checked={formData.pointOfContact === 'Same as Main Owner'}
              onChange={(e) => {
                onDataChange('pointOfContact', e.target.value);
                onDataChange('otherPointOfContact', '');
              }}
              className="w-4 h-4 text-black focus:ring-black/10"
            />
            <span className="text-gray-800 font-medium">Same as Main Owner</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="pointOfContact"
              value="Other(Specify)"
              checked={formData.pointOfContact === 'Other(Specify)'}
              onChange={(e) => onDataChange('pointOfContact', e.target.value)}
              className="w-4 h-4 text-black focus:ring-black/10"
            />
            <span className="text-gray-800 font-medium">Other(Specify)</span>
          </label>
        </div>

        {formData.pointOfContact === 'Other(Specify)' && (
          <div className="mt-5 sm:mt-6">
            <input
              type="text"
              value={formData.otherPointOfContact}
              onChange={(e) => onDataChange('otherPointOfContact', e.target.value)}
              placeholder="Please specify"
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            />
          </div>
        )}
      </div>
      )}
    </div>
  );
}
