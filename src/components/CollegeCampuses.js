import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "w-[1104px] rounded-xl border border-gray-200 p-8 bg-white shadow-sm space-y-6", children: [_jsx("h2", { className: "text-base font-semibold", children: "Campuses & Locations" }), _jsx("div", { className: "flex flex-wrap gap-4 w-[1040px]", children: campuses.map((campus, i) => (_jsxs("div", { className: "w-[512px] h-auto rounded-md border border-gray-200 bg-white p-4 flex gap-4 items-start", children: [_jsx(MapPin, { className: "text-gray-500 mt-1", size: 20 }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: campus.name }), _jsx("p", { className: "text-sm text-gray-500", children: campus.address })] })] }, i))) })] }));
}
