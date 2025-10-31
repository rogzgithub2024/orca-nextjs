'use client';

import { useState } from 'react';

interface OccupancyAvailabilitySectionProps {
  onBack?: () => void;
  onNext?: () => void;
  formData?: Record<string, unknown>;
  onDataChange?: (path: string, value: unknown) => void;
}

const yesNoOptions = ['Yes', 'No'];

type FormRoot = { occupancy?: { availableAsap?: string; renovationPlans?: string; fixedTermOnly?: string; boostAd?: string; anticipatedDate?: string; rentalTerm?: string } };

export default function OccupancyAvailabilitySection({ onBack, onNext, formData, onDataChange }: OccupancyAvailabilitySectionProps) {
  const d = formData as FormRoot | undefined;
  const [isOccupancyOpen, setIsOccupancyOpen] = useState(true);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(true);

  return (
    <div className="space-y-6">
      {/* Occupancy */}
      <div className="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div
          className="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setIsOccupancyOpen(!isOccupancyOpen)}
        >
          <div className="flex items-center gap-3 r-p-3">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold text-black">Occupancy</h3>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm r-mr-3"
            onClick={(e) => {
              e.stopPropagation();
              setIsOccupancyOpen(!isOccupancyOpen);
            }}
          >
            <svg className={`w-5 h-5 transform transition-transform duration-200 ${isOccupancyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        {isOccupancyOpen ? (
        <div className="r-p-3 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <label className="block mb-2 text-gray-800">The property is currently <span className="text-red-500">*</span></label>
              <div className="relative">
                <select value={d?.occupancy?.availableAsap || ''} onChange={(e)=>onDataChange && onDataChange('occupancy.availableAsap', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                  <option value="">-- Select --</option>
                  {['Owner Occupied','Tenant Occupied','Vacant'].map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events m-none r-mr-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : null}
      </div>

      {/* Property Availability */}
      <div className="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div
          className="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
        >
          <div className="flex items-center gap-3 r-p-3">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold text-black">Property Availability</h3>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm r-mr-3"
            onClick={(e) => {
              e.stopPropagation();
              setIsAvailabilityOpen(!isAvailabilityOpen);
            }}
          >
            <svg className={`w-5 h-5 transform transition-transform duration-200 ${isAvailabilityOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        {isAvailabilityOpen ? (
        <div className="r-p-3 space-y-6 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10">
          {/* Current Plan Row */}
          <div>
            <p className="text-gray-800 font-medium mb-4">Current Plan <span className="text-red-500">*</span></p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-gray-800">Is the property available to be rented ASAP?</label>
                <div className="relative">
                  <select value={d?.occupancy?.renovationPlans || ''} onChange={(e)=>onDataChange && onDataChange('occupancy.renovationPlans', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                    <option value="">-- Select --</option>
                    {yesNoOptions.map((o)=>(<option key={o} value={o}>{o}</option>))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none m-none r-mr-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-800">Any immediate plans for renovation on the property?</label>
                <div className="relative">
                  <select value={d?.occupancy?.fixedTermOnly || ''} onChange={(e)=>onDataChange && onDataChange('occupancy.fixedTermOnly', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                    <option value="">-- Select --</option>
                    {yesNoOptions.map((o)=>(<option key={o} value={o}>{o}</option>))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none m-none r-mr-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-800">Need a single, fixed-term tenancy? (move back after first term)</label>
                <div className="relative">
                  <select value={d?.occupancy?.boostAd || ''} onChange={(e)=>onDataChange && onDataChange('occupancy.boostAd', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                    <option value="">-- Select --</option>
                    {yesNoOptions.map((o)=>(<option key={o} value={o}>{o}</option>))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none m-none r-mr-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-800">Boost & highlight ad on classified platforms? ($200)</label>
                <div className="relative">
                  <select className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                    <option value="">-- Select --</option>
                    {yesNoOptions.map((o)=>(<option key={o} value={o}>{o}</option>))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none m-none r-mr-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Anticipated occupancy date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 r-mt-3">
            <div>
              <label className="block mb-2 text-gray-800 r-mb-2 r-mt-4">Anticipated occupancy date for Tenants to move in</label>
              <div className="relative">
                <input type="date" value={d?.occupancy?.anticipatedDate || ''} onChange={(e)=>onDataChange && onDataChange('occupancy.anticipatedDate', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
              </div>
            </div>
          </div>

          {/* Long vs Short term */}
          <div className="r-mt-3">
            <label className="block mb-3 text-gray-800 ">Is this going to be a long-term or short-term rental? <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Long-term, 1 year +',
                'Short-term, less than 1 year',
                'Other',
              ].map((label) => (
                <label key={label} className="flex items-center gap-3 text-gray-800">
                  <input type="radio" name="term" className="w-5 h-5" checked={d?.occupancy?.rentalTerm===label} onChange={()=>onDataChange && onDataChange('occupancy.rentalTerm', label)} />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        ) : null}
      </div>

      {/* Buttons */}
      <div className="flex-shrink-0 r-mt-3 r-pt-3 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 bg-white flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
        <button
          onClick={onBack}
          className="r-p-3 cursor-pointer bg-white text-black border border-gray-300 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Rental Property Information & Features
        </button>

        <button
          onClick={onNext}
          className="r-p-3 cursor-pointer bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Utilities, Inclusions, Restrictions
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}


