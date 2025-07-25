import React from "react";
import { MapPin } from "lucide-react";

export default function CollegeCampuses() {
  const campuses = [
    {
      name: "Melbourne Campus",
      address: "Level 10, 190 Queen St., Melbourne, VIC 3000",
    },
    {
      name: "Brisbane Campus",
      address: "Unit 3, 5 Carol Avenue, SPRINGWOOD, QLD 4127",
    },
    {
      name: "Melbourne Campus",
      address: "Level 10, 190 Queen St., Melbourne, VIC 3000",
    },
    {
      name: "Brisbane Campus",
      address: "Unit 3, 5 Carol Avenue, SPRINGWOOD, QLD 4127",
    },
  ];

  return (
    <div className="w-[1104px] rounded-xl border border-gray-200 p-8 bg-white shadow-sm space-y-6">
      <h2 className="text-base font-semibold">Campuses & Locations</h2>

      <div className="flex flex-wrap gap-4 w-[1040px]">
        {campuses.map((campus, i) => (
          <div
            key={i}
            className="w-[512px] h-auto rounded-md border border-gray-200 bg-white p-4 flex gap-4 items-start"
          >
            <MapPin className="text-gray-500 mt-1" size={20} />
            <div>
              <p className="text-sm font-medium">{campus.name}</p>
              <p className="text-sm text-gray-500">{campus.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
