'use client';

 
import { useState } from 'react';

interface MailingInformationSectionProps {
  formData: {
    unitSuite: string;
    streetAddress: string;
    city: string;
    province: string;
    postalCode: string;
  };
  onDataChange: (field: string, value: string) => void;
}

const provinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
];

export default function MailingInformationSection({
  formData,
  onDataChange,
}: MailingInformationSectionProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 ">
      <div
        className="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3 r-p-3">
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
          </svg>
          <h3 className="text-lg font-semibold text-black">Mailing Information</h3>
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="bg-gray-50 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3">
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-5 sm:mb-6 font-medium">
          Owner primary residence mailing address
        </p>

        <div className="space-y-5 sm:space-y-6">
          {/* Unit & Suite # */}
          <div className="r-mb-2">
            <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
              Unit & Suite #
            </label>
            <input
              type="text"
              value={formData.unitSuite}
              onChange={(e) => onDataChange('unitSuite', e.target.value)}
              placeholder="Unit & Suite #"
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            />
          </div>

          {/* Street Address */}
          <div className="r-mb-2">
            <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
              Street Address <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              type="text"
              value={formData.streetAddress}
              onChange={(e) => onDataChange('streetAddress', e.target.value)}
              placeholder="Street Address*"
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            />
          </div>

          {/* City */}
          <div className="r-mb-2">
            <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
              City <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => onDataChange('city', e.target.value)}
              placeholder="City*"
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            />
          </div>

          {/* Province */}
          <div className="r-mb-2">
            <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
              Province <span className="text-red-500 text-xl">*</span>
            </label>
            <div className="relative">
              <select
                value={formData.province}
                onChange={(e) => onDataChange('province', e.target.value)}
                className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
              >
                <option value="">Select Province</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 pointer-events-none">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Postal / ZIP Code */}
          <div>
            <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
              Postal / ZIP Code <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              type="text"
              value={formData.postalCode}
              onChange={(e) => onDataChange('postalCode', e.target.value)}
              placeholder="Postal / ZIP Code*"
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            />
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
