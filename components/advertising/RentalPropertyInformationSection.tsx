'use client';

import { useState } from 'react';

interface RentalInfo {
  unitSuite?: string;
  streetAddress?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  neighborhood?: string;
  yearBuilt?: string;
  totalFloorArea?: string;
  keys?: string;
  bedrooms?: string;
  bathrooms?: string;
  den?: string;
  balconypatio?: string;
  storage?: string;
  fireplaceTypes?: string[];
  alarmCode?: string;
  parking?: string[];
  laundry?: string;
  heating?: string[];
}

interface RentalPropertyInformationSectionProps {
  onBack?: () => void;
  onNext?: () => void;
  formData?: { rental?: RentalInfo };
  onDataChange?: (path: string, value: unknown) => void;
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

export default function RentalPropertyInformationSection({ onBack, onNext, formData, onDataChange }: RentalPropertyInformationSectionProps) {
  const [sameAsMailing, setSameAsMailing] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const chevronClassName = `w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`;
  const d: RentalInfo = formData?.rental ?? {};
  const featureKeyMap: Record<string, keyof RentalInfo> = {
    Bedrooms: 'bedrooms',
    Bathrooms: 'bathrooms',
    Den: 'den',
    'Balcony/Patio': 'balconypatio',
    Storage: 'storage',
  };

  return (
    <div className="space-y-6">
      <div className="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div
          className="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3 r-p-3">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold text-black">Rental Property Information & Features</h3>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm r-mr-3"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <svg className={chevronClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        {isOpen ? (
        <div className="r-p-3 space-y-6 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10">
          {/* Address Row 1 */}
            <label className="flex items-center gap-3 text-base sm:text-lg lg:text-md text-gray-800 r-mb-3">
              <input type="checkbox" className="w-5 h-5" checked={sameAsMailing} onChange={(e) => setSameAsMailing(e.target.checked)} />
              <span>Same as Mailing Address</span>
            </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 r-mb-2">
           
            <div>
              <label className="block mb-2 text-gray-800">Unit & Suite #1</label>
              <input value={d.unitSuite || ''} onChange={(e)=>onDataChange && onDataChange('rental.unitSuite', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
            </div>
       
            <div>
              <label className="block mb-2 text-gray-800">Street Address <span className="text-red-500">*</span></label>
              <input value={d.streetAddress || ''} onChange={(e)=>onDataChange && onDataChange('rental.streetAddress', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
            </div>
            <div>
              <label className="block mb-2 text-gray-800">City <span className="text-red-500">*</span></label>
              <input value={d.city || ''} onChange={(e)=>onDataChange && onDataChange('rental.city', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
            </div>
            <div>
              <label className="block mb-2 text-gray-800">Province <span className="text-red-500">*</span></label>
              <div className="relative">
                <select value={d.province || ''} onChange={(e)=>onDataChange && onDataChange('rental.province', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                  <option value="">Select Province</option>
                  {provinces.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none r-mr-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Address Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <label className="block mb-2 text-gray-800">Postal / ZIP Code <span className="text-red-500">*</span></label>
              <input value={d.postalCode || ''} onChange={(e)=>onDataChange && onDataChange('rental.postalCode', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
            </div>
            <div>
              <label className="block mb-2 text-gray-800">Neighborhood</label>
              <input value={d.neighborhood || ''} onChange={(e)=>onDataChange && onDataChange('rental.neighborhood', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
            </div>
            
            <div>
              <label className="block mb-2 text-gray-800">Year Built</label>
              <input value={d.yearBuilt || ''} onChange={(e)=>onDataChange && onDataChange('rental.yearBuilt', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
            </div>
            <div>
              <label className="block mb-2 text-gray-800">Total Floor Area (sq. ft.) <span className="text-red-500">*</span></label>
              <input value={d.totalFloorArea || ''} onChange={(e)=>onDataChange && onDataChange('rental.totalFloorArea', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
          </div>
          </div>

          {/* Address Row 3 */}
          

          {/* Keys */}
          <div className="space-y-2 r-mt-3 r-mb-3">
            <label className="block text-gray-800 font-medium">Keys: if keys are provided, please explain our access to the keys.</label>
            <p className="text-xs text-red-500">We will need to be provided a set of keys and FOBs to facilitate a smooth access to the unit for viewings.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 r-mt-3">
              {['Orca will pick up the key','Owner will drop off the keys at the Orca office','Other'].map((opt) => (
                <label key={opt} className="flex items-center gap-3 text-gray-800">
                  <input type="radio" name="keys" value={opt} checked={(d.keys||'')===opt} onChange={(e)=>onDataChange && onDataChange('rental.keys', e.target.value)} className="w-5 h-5"/>
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {['Bedrooms','Bathrooms','Den','Balcony/Patio','Storage'].map((label) => {
              const key = featureKeyMap[label];
              return (
                <div key={label}>
                  <label className="block mb-2 text-gray-800">{label}</label>
                  <div className="relative">
                    <select value={(d[key] || '') as string} onChange={(e)=>onDataChange && onDataChange(`rental.${String(key)}`, e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                      <option value="">Select</option>
                      {[...'0123456'].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 r-mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fireplace */}
          <div className="space-y-3 r-mt-3">
            <label className="block text-gray-800 font-medium r-mb-2">Type of Fireplace</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 r-mt-2">
              {['Gas Fireplace','Wood Fireplace','Electric Fireplace','Not Available For This Property'].map((label) => {
                const checked = (d.fireplaceTypes||[]).includes(label);
                return (
                <label key={label} className="flex items-center gap-3 text-gray-800">
                  <input type="checkbox" className="w-5 h-5" checked={checked} onChange={(e)=>{
                    const prev = (d.fireplaceTypes||[]) as string[];
                    const next = e.target.checked ? [...prev, label] : prev.filter(x=>x!==label);
                    if (onDataChange) {
                      onDataChange('rental.fireplaceTypes', next);
                    }
                  }} />
                  <span >{label}</span>
                </label>
              );
              })}
            </div>
          </div>

          {/* Alarm Code */}
          <div className="r-mt-3">
            <label className="block mb-2 text-gray-800">Alarm Code <span className="text-gray-500 text-sm">If available, please provide code below.</span></label>
            <input value={d.alarmCode || ''} onChange={(e)=>onDataChange && onDataChange('rental.alarmCode', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
          </div>

          {/* Parking */}
          <div className="space-y-2 r-mt-3">
            <label className="block text-gray-800 font-medium">Parking <span className="text-xs text-gray-500">Please select all that applies</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Underground','Attached/Detached Garage','Street','Carport'].map((label) => {
                const checked = (d.parking||[]).includes(label);
                return (
                <label key={label} className="flex items-center gap-3 text-gray-800">
                  <input type="checkbox" className="w-5 h-5" checked={checked} onChange={(e)=>{
                    const prev = (d.parking||[]) as string[];
                    const next = e.target.checked ? [...prev, label] : prev.filter(x=>x!==label);
                    if (onDataChange) {
                      onDataChange('rental.parking', next);
                    }
                  }} />
                  <span>{label}</span>
                </label>
              );
              })}
            </div>
          </div>

          {/* Laundry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 r-mt-3">
            <div>
              <label className="block mb-2 text-gray-800">Laundry <span className="text-red-500">*</span></label>
              <div className="relative">
                <select value={d.laundry || ''} onChange={(e)=>onDataChange && onDataChange('rental.laundry', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                  <option value="">Select</option>
                  {['In-Suite','Shared','None'].map((o)=> (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Heating */}
          <div className="space-y-3 r-mt-3">
            <label className="block text-gray-800 font-medium">Heating of property</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Forced Air','Radiant Hot water','Electric Baseboard','Other'].map((label) => {
                const checked = (d.heating||[]).includes(label);
                return (
                <label key={label} className="flex items-center gap-3 text-gray-800">
                  <input type="checkbox" className="w-5 h-5" checked={checked} onChange={(e)=>{
                    const prev = (d.heating||[]) as string[];
                    const next = e.target.checked ? [...prev, label] : prev.filter(x=>x!==label);
                    if (onDataChange) {
                      onDataChange('rental.heating', next);
                    }
                  }} />
                  <span>{label}</span>
                </label>
              );
              })}
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
          Homeowner Details
        </button>

        <button
          onClick={onNext}
          className="r-p-3 cursor-pointer bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Occupancy and Property Availability
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}


