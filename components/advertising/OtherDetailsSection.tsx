'use client';

import { useState } from 'react';

interface OtherDetailsSectionProps {
  onBack?: () => void;
  onNext?: () => void;
  formData?: Record<string, unknown>;
  onDataChange?: (path: string, value: unknown) => void;
}

type FormRoot = { other?: {
  strataCompany?: string; strataManagerName?: string; strataPhone?: string; strataEmail?: string;
  buildingManagerName?: string; buildingManagerPhone?: string; buildingManagerEmail?: string;
  moveInFees?: string; amenities?: string[]; signUpFront?: string; maintenance?: string[];
  sprinklersService?: string; hasSelfContainedSuite?: string; fuseBoxLocation?: string;
  amenitiesFloor?: string; bikeStorageLocation?: string; garbageInfo?: string; amenitiesNotes?: string;
} };

export default function OtherDetailsSection({ onBack, onNext, formData, onDataChange }: OtherDetailsSectionProps) {
  const d = formData as FormRoot | undefined;
  const [isOpen, setIsOpen] = useState(true);

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
            <h3 className="text-lg font-semibold text-black">Other Details</h3>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm r-mr-3"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <span>CLICK HERE TO COLLAPSE</span>
            <svg className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen ? (
        <div className="r-p-3 space-y-6 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10">
          {/* Other Details header note */}
          <div className="space-y-1">
            <p className="text-gray-800 font-medium">OTHER DETAILS</p>
            <p className="text-xs text-red-400">If rental unit is Condo kindly provide following data. If property is a house, please proceed to next page.</p>
          </div>

          {/* Strata company */}
          <div className="r-mt-2">
            <label className="block mb-2 text-gray-800">Name of Strata Property Management Company.</label>
            <input value={d?.other?.strataCompany || ''} onChange={(e)=>onDataChange && onDataChange('other.strataCompany', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
          </div>

          {/* Contacts */}
          <div className="space-y-1 r-mt-3">
            <p className="text-xs text-red-400">Kindly provide names and means of contact (email and/or number, if unable to provide please skip to next section)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 r-mt-2">
              <div>
                <label className="block mb-2 text-gray-800">Strata Manager Name</label>
                <input value={d?.other?.strataManagerName || ''} onChange={(e)=>onDataChange && onDataChange('other.strataManagerName', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
              </div>
              <div>
                <label className="block mb-2 text-gray-800">Strata Phone</label>
                <input placeholder="(000) 000-0000" value={d?.other?.strataPhone || ''} onChange={(e)=>onDataChange && onDataChange('other.strataPhone', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
              </div>
              <div>
                <label className="block mb-2 text-gray-800">Strata Email Address</label>
                <input type="email" value={d?.other?.strataEmail || ''} onChange={(e)=>onDataChange && onDataChange('other.strataEmail', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
              </div>
              <div>
                <label className="block mb-2 text-gray-800">Building Manager Name</label>
                <input value={d?.other?.buildingManagerName || ''} onChange={(e)=>onDataChange && onDataChange('other.buildingManagerName', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
              </div>
              <div>
                <label className="block mb-2 text-gray-800">Phone</label>
                <input placeholder="(000) 000-0000" value={d?.other?.buildingManagerPhone || ''} onChange={(e)=>onDataChange && onDataChange('other.buildingManagerPhone', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
              </div>
              <div>
                <label className="block mb-2 text-gray-800">Email Address</label>
                <input type="email" value={d?.other?.buildingManagerEmail || ''} onChange={(e)=>onDataChange && onDataChange('other.buildingManagerEmail', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
              </div>
            </div>
          </div>

          {/* Move in fees */}
          <div className="r-mt-2">
            <label className="block mb-1 text-gray-800">Move In Fees</label>
            <p className="text-xs text-red-400 r-mb-1">Kindly provide amount of move in fees.</p>
            <input value={d?.other?.moveInFees || ''} onChange={(e)=>onDataChange && onDataChange('other.moveInFees', e.target.value)} className="r-p-5 w-full sm:w-80 px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
          </div>

          {/* Amenities checklist */}
          <div className="space-y-2 r-mt-3">
            <label className="block text-gray-800 font-medium">Kindly tick utilities/other items available in the rental property.</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Gym','Pool','Hot Tub','Sauna','Concierge','Board Rooms','Social Rooms','Guest Rooms','Bike Storage','Visitor Parking','Other'].map((label)=> {
                const checked = (d?.other?.amenities || []).includes(label);
                return (
                <label key={label} className="flex items-center gap-3 text-gray-800">
                  <input type="checkbox" className="w-5 h-5" checked={checked} onChange={(e)=>{
                    const prev: string[] = d?.other?.amenities || [];
                    const next = e.target.checked ? [...prev, label] : prev.filter(x=>x!==label);
                    if (onDataChange) { onDataChange('other.amenities', next); }
                  }} />
                  <span>{label}</span>
                </label>
              );
              })}
            </div>
          </div>

          {/* Sign up front */}
          <div className="space-y-2 r-mt-3">
            <label className="block text-gray-800">Is it okay to put a sign up front? <span className="text-xs text-gray-500">(highly recommend as it increases inquiries up to 20%)</span></label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {['Yes','No'].map((label)=> (
                <label key={label} className="flex items-center gap-3 text-gray-800">
                  <input type="radio" name="signUpFront" className="w-5 h-5" checked={d?.other?.signUpFront===label} onChange={()=>onDataChange && onDataChange('other.signUpFront', label)} />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Ongoing maintenance */}
          <div className="space-y-2 r-mt-3">
            <label className="block text-gray-800 font-medium">ONGOING MAINTENANCE</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Gutter Maintenance','Heating system','Chimney','Garden Maintenance Seasonal','Lawn Maintenance'].map((label)=> {
                const checked = (d?.other?.maintenance || []).includes(label);
                return (
                <label key={label} className="flex items-center gap-3 text-gray-800">
                  <input type="checkbox" className="w-5 h-5" checked={checked} onChange={(e)=>{
                    const prev: string[] = d?.other?.maintenance || [];
                    const next = e.target.checked ? [...prev, label] : prev.filter(x=>x!==label);
                    if (onDataChange) { onDataChange('other.maintenance', next); }
                  }} />
                  <span>{label}</span>
                </label>
              );
              })}
            </div>
          </div>

          {/* Sprinklers and suite */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 r-mt-3">
            <div>
              <label className="block mb-2 text-gray-800">Inground Sprinklers that need servicing?</label>
              <div className="relative">
                <select value={d?.other?.sprinklersService || ''} onChange={(e)=>onDataChange && onDataChange('other.sprinklersService', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                  <option value="">-- Select --</option>
                  {['Yes','No','Unknown'].map((o)=>(<option key={o} value={o}>{o}</option>))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none m-none r-mr-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-gray-800">Has self-contained suite?</label>
              <div className="relative">
                <select value={d?.other?.hasSelfContainedSuite || ''} onChange={(e)=>onDataChange && onDataChange('other.hasSelfContainedSuite', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium">
                  <option value="">-- Select --</option>
                  {['Yes','No'].map((o)=>(<option key={o} value={o}>{o}</option>))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none m-none r-mr-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-gray-800">Which floor/Stall/Locker is the Bike Storage at?</label>
              <p className="text-xs text-red-0">.</p>
              <input value={d?.other?.bikeStorageLocation || ''} onChange={(e)=>onDataChange && onDataChange('other.bikeStorageLocation', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
            </div>
          </div>

          {/* Garbage */}
          <div className="r-mt-2">
            <label className="block mb-2 text-gray-800">Garbage: Location, Disposal & Restrictions</label>
            <p className="text-xs text-red-500">For Houses, please specify days / schedule for pick up</p>
            <input value={d?.other?.garbageInfo || ''} onChange={(e)=>onDataChange && onDataChange('other.garbageInfo', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
          </div>

          {/* Notes about location of building amenities */}
          <div className="r-mt-2">
            <label className="block mb-2 text-gray-800">Any information that you could share with your future Tenants about the location of the building amenities?</label>
            <textarea rows={5} value={d?.other?.amenitiesNotes || ''} onChange={(e)=>onDataChange && onDataChange('other.amenitiesNotes', e.target.value)} className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium" />
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
          Utilities, Inclusions, Restrictions
        </button>

        <button
          onClick={onNext}
          className="r-p-3 cursor-pointer bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Review
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}



