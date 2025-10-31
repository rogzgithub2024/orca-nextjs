'use client';

type UtilitiesData = {
  water?: string; electricity?: string; gas?: string; heat?: string;
  inclusions?: string[]; furnishing?: string; pets?: string; propertyType?: string;
};
type OccupancyData = {
  availableAsap?: string; renovationPlans?: string; fixedTermOnly?: string; boostAd?: string;
  anticipatedDate?: string; rentalTerm?: string;
};
type OtherData = {
  strataCompany?: string; strataManagerName?: string; strataPhone?: string; strataEmail?: string;
  buildingManagerName?: string; buildingManagerPhone?: string; buildingManagerEmail?: string;
  moveInFees?: string; amenities?: string[]; signUpFront?: string; maintenance?: string[];
  sprinklersService?: string; hasSelfContainedSuite?: string; fuseBoxLocation?: string;
  amenitiesFloor?: string; bikeStorageLocation?: string; garbageInfo?: string; amenitiesNotes?: string;
};

interface ReviewSectionProps {
  onBack?: () => void;
  onSubmit?: () => void;
  data?: {
    businessLegalName?: string;
    ownerEmail?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    residentStatus?: string;
    coOwners?: Array<{ firstName: string; lastName: string; dateOfBirth: string }>;
    pointOfContact?: string;
    otherPointOfContact?: string;
    unitSuite?: string;
    streetAddress?: string;
    city?: string;
    province?: string;
    postalCode?: string;
    utilities?: UtilitiesData;
    occupancy?: OccupancyData;
    other?: OtherData;
    rental?: {
      unitSuite?: string; streetAddress?: string; city?: string; province?: string; postalCode?: string;
      neighborhood?: string; yearBuilt?: string; totalFloorArea?: string; keys?: string;
      bedrooms?: string; bathrooms?: string; den?: string; balconyPatio?: string; storage?: string;
      fireplaceTypes?: string[]; alarmCode?: string; parking?: string[]; laundry?: string; heating?: string[];
    };
  };
}

function ChipList({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return <span className="text-gray-500">-</span>;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((v) => (
        <span key={v} className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border border-gray-200">{v}</span>
      ))}
    </div>
  );
}

function YesNoBadge({ value }: { value?: string }) {
  if (!value) return <span className="text-gray-500">-</span>;
  const ok = value.toLowerCase() === 'yes';
  return (
    <span className={`px-2 py-1 text-xs rounded-full border ${ok ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>{value}</span>
  );
}

// Card and Row components removed; using divs directly below per request

export default function ReviewSection({ onBack, onSubmit, data }: ReviewSectionProps) {
  const u = data?.utilities || {};
  const o = data?.occupancy || {};
  const other = data?.other || {};

  return (
    <div className="space-y-6">
      <div className="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div className="flex items-center gap-3 r-p-3">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold text-black">Review</h3>
          </div>
        </div>
        <div className="r-p-3 space-y-6 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10">
          <p className="text-gray-700 r-mb-3">Please review your entries before submitting. You can go back to any step and make changes if needed.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            <div className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-black via-gray-700 to-black opacity-80" />
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4 r-p-2">
                  <h4 className="font-semibold text-gray-900 tracking-tight">Homeowner Details</h4>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Summary</span>
                </div>
                <div className="divide-y divide-gray-100 rounded-xl bg-gray-50/50 p-3 sm:p-4">
                  <div className="space-y-3 text-sm text-gray-800">
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Business/Legal Name</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.businessLegalName || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Owner Email</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.ownerEmail || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Phone</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.phone || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">First Name</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.firstName || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Last Name</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.lastName || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Date of Birth</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.dateOfBirth || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Resident Status</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.residentStatus || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Point of Contact</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.pointOfContact || '-'}</div></div></div>
              {data?.otherPointOfContact ? (
                      <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Other Contact</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.otherPointOfContact}</div></div></div>
              ) : null}
              {data?.coOwners && data.coOwners.length > 0 ? (
                      <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Co-Owners</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><ChipList items={data.coOwners.map(c=>`${c.firstName} ${c.lastName}`)} /></div></div></div>
              ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-black via-gray-700 to-black opacity-80" />
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4 r-p-2">
                  <h4 className="font-semibold text-gray-900 tracking-tight">Utilities, Inclusions, Restrictions</h4>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Summary</span>
                </div>
                <div className="divide-y divide-gray-100 rounded-xl bg-gray-50/50 p-3 sm:p-4">
                  <div className="space-y-3 text-sm text-gray-800">
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Water</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{u.water || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Electricity</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{u.electricity || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Gas</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{u.gas || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Heat</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{u.heat || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Inclusions</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><ChipList items={u.inclusions} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Furnishing</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{u.furnishing || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Pets</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{u.pets || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Property Type</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{u.propertyType || '-'}</div></div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-black via-gray-700 to-black opacity-80" />
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4 r-p-2">
                  <h4 className="font-semibold text-gray-900 tracking-tight">Rental Property Information & Features</h4>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Summary</span>
                </div>
                <div className="divide-y divide-gray-100 rounded-xl bg-gray-50/50 p-3 sm:p-4">
                  <div className="space-y-3 text-sm text-gray-800">
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Unit/Suite</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.unitSuite || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Street Address</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.streetAddress || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">City</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.city || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Province</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.province || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Postal Code</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.postalCode || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Neighborhood</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.neighborhood || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Year Built</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.yearBuilt || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Total Floor Area</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.totalFloorArea || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Keys</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.keys || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Bedrooms</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.bedrooms || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Bathrooms</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.bathrooms || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Den</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.den || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Balcony/Patio</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.balconyPatio || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Storage</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.storage || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Fireplace Types</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><ChipList items={data?.rental?.fireplaceTypes} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Alarm Code</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.alarmCode || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Parking</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><ChipList items={data?.rental?.parking} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Laundry</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{data?.rental?.laundry || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Heating</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><ChipList items={data?.rental?.heating} /></div></div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-black via-gray-700 to-black opacity-80" />
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4 r-p-2">
                  <h4 className="font-semibold text-gray-900 tracking-tight">Occupancy & Availability</h4>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Summary</span>
                </div>
                <div className="divide-y divide-gray-100 rounded-xl bg-gray-50/50 p-3 sm:p-4">
                  <div className="space-y-3 text-sm text-gray-800">
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Available ASAP</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><YesNoBadge value={o.availableAsap} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Renovation Plans</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><YesNoBadge value={o.renovationPlans} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Fixed Term Only</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><YesNoBadge value={o.fixedTermOnly} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Boost Ad</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><YesNoBadge value={o.boostAd} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Anticipated Date</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{o.anticipatedDate || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Rental Term</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{o.rentalTerm || '-'}</div></div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-black via-gray-700 to-black opacity-80" />
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4 r-p-2">
                  <h4 className="font-semibold text-gray-900 tracking-tight">Other Details</h4>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Summary</span>
                </div>
                <div className="divide-y divide-gray-100 rounded-xl bg-gray-50/50 p-3 sm:p-4">
                  <div className="space-y-3 text-sm text-gray-800">
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Strata Company</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.strataCompany || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Strata Manager</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.strataManagerName || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Strata Phone</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.strataPhone || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Strata Email</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.strataEmail || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Building Manager</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.buildingManagerName || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Manager Phone</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.buildingManagerPhone || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Manager Email</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.buildingManagerEmail || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Move In Fees</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.moveInFees || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Amenities</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><ChipList items={other.amenities} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Sign Up Front</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><YesNoBadge value={other.signUpFront} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Ongoing Maintenance</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><ChipList items={other.maintenance} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Sprinklers Service</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.sprinklersService || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Self-contained Suite</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm"><YesNoBadge value={other.hasSelfContainedSuite} /></div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Fuse Box Location</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.fuseBoxLocation || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Amenities Floor</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.amenitiesFloor || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Bike Storage Location</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.bikeStorageLocation || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Garbage Info</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.garbageInfo || '-'}</div></div></div>
                    <div className="flex items-start gap-4 py-2 first:pt-0 last:pb-0"><div className="min-w-[180px] shrink-0 text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Amenities Notes</div><div className="grow"><div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">{other.amenitiesNotes || '-'}</div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 r-mt-3 r-pt-3 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 bg-white flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
        <button
          onClick={onBack}
          className="r-p-3 cursor-pointer bg-white text-black border border-gray-300 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Other Details
        </button>

        <button
          onClick={onSubmit}
          className="r-p-3 cursor-pointer bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Submit
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}


